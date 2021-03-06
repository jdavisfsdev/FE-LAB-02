import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlayerItem from './PlayerItem';
import './PlayerList.css';

export default function PlayerList({ players }) {
  
  const playerEl = players.map((player) => (
    <li key={player.id} className = "listItem"> <Link to={`/api/${player.id}`} >
      <PlayerItem 
        first_name={player.first_name}
        last_name={player.last_name}
        position={player.position} />
    </Link>
    </li>
  ));
  
  return (
    <div>
      <ul>{playerEl}</ul>
    </div>
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
