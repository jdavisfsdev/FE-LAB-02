import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class RickMortyMain extends Component {
    state = {
      players: [],
      loading: true
    };
    render() {
      const { players, loading } = this.state;
      if(loading) return <h1>Almost...</h1>;
      return (
        <div>
                
        </div>
      );
    }
}
