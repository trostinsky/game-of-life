import React from 'react';
import ReactDOM from 'react-dom/client';
import GameController from './components/game/game.controller';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameController size={50} tickDelay={400} />
  </React.StrictMode>
);
