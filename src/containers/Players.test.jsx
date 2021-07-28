import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayersMain from './PlayersMain';

describe('PlayersMain component', () => {
  it('renders PlayersMain', async () => {
    render(<PlayersMain />);

    screen.getByText('Almost...');

    const list = await screen.findByRole('list');
    expect(list).not.toBeEmptyDOMElement;
    
  });
});
