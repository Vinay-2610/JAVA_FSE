import React from 'react';

function Scorebelow70({ players }) {
  // Using arrow function to filter players with scores below 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>Mr. {player.name} {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Scorebelow70;
