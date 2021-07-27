import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerItem({ first_name, last_name, position }) {
  return (
    <>
      <p>{`${first_name} ${last_name}`}</p>    
      <p>{position}</p>
    </>
  );
}

PlayerItem.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
