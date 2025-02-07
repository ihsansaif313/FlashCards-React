import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  background: ${({ theme }) => theme.gradientPrimary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadowCard};
`;

const ActionButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
  border: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.accent};
  color: white;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadowCard};
  transition: ${({ theme }) => theme.transitionNormal};
  font-size: 1rem;
  font-weight: 500;
  z-index: 100;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadowHover};
    background: ${({ theme }) => theme.primary};
  }

  // Reset Button specific
  &:first-child {
    bottom: 2rem;
    left: 2rem;
  }

  // Scroll Top Button specific
  &:last-child {
    bottom: 2rem;
    right: 2rem;
    padding: 1.5rem;
    border-radius: 50%;
    
    svg {
      margin: 0;
    }
  }

  svg {
    font-size: 1.1em;
  }
`;

export default function Footer({ onReset }) {
  return (
    <FooterContainer>
      <ActionButton onClick={onReset}>
        <FontAwesomeIcon icon={faSyncAlt} /> Reset Cards
      </ActionButton>
      <ActionButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FontAwesomeIcon icon={faArrowUp} />
      </ActionButton>
    </FooterContainer>
  );
}