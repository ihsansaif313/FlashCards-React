import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.gradientPrimary};
  color: white;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
  margin-bottom: 3rem;
  box-shadow: ${({ theme }) => theme.shadowCard};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.accent};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizeH1};
    margin-bottom: 1rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
    opacity: 0.9;
    font-weight: 300;
  }
`;

// Added default export
export default function Header() {
  return (
    <HeaderContainer>
      <h1>React Flashcards</h1>
      <p>Click on a card to reveal the answer. Happy learning!</p>
    </HeaderContainer>
  );
}