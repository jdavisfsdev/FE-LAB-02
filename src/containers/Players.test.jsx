import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PlayersMain from './PlayersMain';

describe('PlayersMain component', () => {
  it('renders PlayersMain', async () => {
    render(
      <Router>
        <PlayersMain />
      </Router>);

    screen.getByText('Almost...');

    const list = await screen.findByRole('list');
    expect(list).not.toBeEmptyDOMElement;
    
  });
});
