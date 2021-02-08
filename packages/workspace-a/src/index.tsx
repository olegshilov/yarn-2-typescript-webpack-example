import React from 'react';
import { render } from 'react-dom';
import { Root } from './components/Root';
import './styles';

function createApp(): void {
  const container = document.getElementById('root');

  render(<Root />, container);
}

createApp();
