import React from 'react';

function OddPlayers({ IndianTeam }) {
  // Destructuring to get odd position players
  const [first, , third, , fifth] = IndianTeam;
  
  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}

function EvenPlayers({ IndianTeam }) {
  // Destructuring to get even position players
  const [, second, , fourth, , sixth] = IndianTeam;
  
  return (
    <div>
      <h2>Even Players</h2>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}

function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <div>
      <h2>List of Indian Players Merged:</h2>
      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

function IndianPlayers() {
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];
  
  // T20 and Ranji Trophy players
  const T20players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  
  // Merge arrays using spread operator
  const MergedPlayers = [...T20players, ...RanjiTrophyPlayers];
  
  return (
    <div>
      <div>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        <OddPlayers IndianTeam={IndianTeam} />
        <hr />
        <h1>Even Players</h1>
        <EvenPlayers IndianTeam={IndianTeam} />
      </div>
      <hr />
      <div>
        <ListofIndianPlayers IndianPlayers={MergedPlayers} />
      </div>
    </div>
  );
}

export default IndianPlayers;
