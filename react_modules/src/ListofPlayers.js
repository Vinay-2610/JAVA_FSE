import React from 'react';

function ListofPlayers({ players }) {
  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>Mr. {player.name} {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
