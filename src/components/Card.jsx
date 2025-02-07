import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  perspective: 1200px;
  animation: ${({ theme }) => theme.fadeIn} 0.6s ease forwards;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 420px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadowCard};
  
  &.flipped {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: center;

  &.front {
    background: white;
    color: ${({ theme }) => theme.primary};
    border: 1px solid rgba(42, 45, 67, 0.1);
  }

  &.back {
    background: ${({ theme }) => theme.gradientAccent};
    color: white;
    transform: rotateY(180deg); // This is the critical fix
  }
`;

export default function Card({ card, isFlipped, onClick }) {
  return (
    <CardWrapper>
      <CardContainer className={isFlipped ? 'flipped' : ''} onClick={onClick}>
        <CardFace className="front">
          <p>{card.question}</p>
        </CardFace>
        <CardFace className="back">
          <p>{card.answer}</p>
        </CardFace>
      </CardContainer>
    </CardWrapper>
  );
}