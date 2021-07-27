import React from 'react';
import PropTypes from 'prop-types';
import PlayerItem from './PlayerItem';

export default function PlayerList({ players }) {
  
  const playerEl = players.map((player) => (
    <li key={player.id}>
      <PlayerItem 
        first_name={player.first_name}
        last_name={player.last_name}
        position={player.position} />
    </li>
  ));
  
  return (
    <ul>{playerEl}</ul>
  );
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
  }))

};
