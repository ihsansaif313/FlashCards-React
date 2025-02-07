import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components';
import { questions } from './data';
import Header from './components/Header';
import FlashCards from './components/FlashCards';
import Footer from './components/Footer';

// Theme configuration
const theme = {
  primary: '#2A2D43',
  secondary: '#5C6B73',
  accent: '#D62828',
  light: '#F4F4F9',
  dark: '#1A1A1D',
  gradientPrimary: 'linear-gradient(135deg, #2A2D43 0%, #1A1A1D 100%)',
  gradientAccent: 'linear-gradient(45deg, #D62828 0%, #FF4B4B 100%)',
  fontHeading: '"Poppins", sans-serif',
  fontBody: '"Inter", sans-serif',
  fontSizeBase: '1rem',
  fontSizeH1: '2.5rem',
  fontSizeH2: '2rem',
  spacingUnit: '1rem',
  borderRadius: '16px',
  shadowCard: '0 12px 24px -6px rgba(0, 0, 0, 0.1)',
  shadowHover: '0 24px 48px -12px rgba(0, 0, 0, 0.15)',
  transitionFast: 'all 0.15s ease-in-out',
  transitionNormal: 'all 0.3s ease-in-out',
  fadeIn: keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `,
  float: keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
  `
};

// Global styles
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fontBody};
    background-color: ${({ theme }) => theme.light};
    background-image: 
      radial-gradient(${({ theme }) => theme.primary}22 1px, transparent 1px),
      radial-gradient(${({ theme }) => theme.primary}22 1px, transparent 1px);
    background-position: 0 0, 20px 20px;
    background-size: 40px 40px;
    min-height: 100vh;
  }
  
  * {
    box-sizing: border-box;
  }

  /* Smooth transitions for all interactive elements */
  a, button, .card {
    transition: 
      color ${({ theme }) => theme.transitionFast},
      background-color ${({ theme }) => theme.transitionFast},
      transform ${({ theme }) => theme.transitionNormal},
      box-shadow ${({ theme }) => theme.transitionFast};
  }

  /* Better focus states */
  *:focus {
    outline: 2px solid ${({ theme }) => theme.accent}88;
    outline-offset: 2px;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: ${({ theme }) => theme.light};
  font-family: ${({ theme }) => theme.fontBody};
`;

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  // Reset all cards
  const resetCards = () => {
    setSelectedId(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <FlashCards questions={questions} selectedId={selectedId} setSelectedId={setSelectedId} />
        <Footer onReset={resetCards} />
      </Container>
    </ThemeProvider>
  );
}