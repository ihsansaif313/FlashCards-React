import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function FlashCards({ questions, selectedId, setSelectedId }) {
  return (
    <Grid>
      {questions.map((card) => (
        <Card
          key={card.id}
          card={card}
          isFlipped={selectedId === card.id}
          onClick={() => setSelectedId(selectedId === card.id ? null : card.id)}
        />
      ))}
    </Grid>
  );
}