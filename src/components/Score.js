import React from 'react';

const Score = ({ date, score }) => {
  return (
    <li>
      <p>Date: {date}</p>
      <p>Score: {score}</p>
    </li>
  );
};

export default Score;
