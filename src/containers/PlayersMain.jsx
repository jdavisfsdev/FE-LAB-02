import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayerList from '../components/PlayerList';

const getPlayers = async () => {
  const res = await fetch('https://www.balldontlie.io/api/v1/players');
  const json = await res.json();
  return json.data;
};

export default class PlayersMain extends Component {
    state = {
      players: [],
      loading: true
    };
    
    async componentDidMount() {
      const players = await getPlayers();
      this.setState({ players, loading:false });
    }

    render() {
      const { players, loading } = this.state;
      if(loading) return <h1>Almost...</h1>;
      return <PlayerList players={players} />;

          


    }
}
