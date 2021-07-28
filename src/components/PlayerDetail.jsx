/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router';

export const getPlayer = async (id) => {
  const res = await fetch(`https://www.balldontlie.io/api/v1/players/${id}`);
  const json = await res.json();
  return [json.first_name, ' ', json.last_name, ' and he plays in ', json.team.city];
};

class PlayerDetail extends Component {
  state = {
    player: []
  };  
    
  async componentDidMount() {
    const { match } = this.props;
    const player = await getPlayer(match.params.id);
    this.setState({ player });
  }
  render() {
    const { player } = this.state;
    return (
      <div>
        <h1>This is {player}</h1>
      </div>
    );
  }
}

export default withRouter(PlayerDetail);
