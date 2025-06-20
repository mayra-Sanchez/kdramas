import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RoutesProject from './router/router/RoutesProject';
import './styles/theme.css';
import MusicPlayer from './components/MusicPlayer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <RoutesProject />
      <MusicPlayer />
    </>
  </StrictMode>
);
