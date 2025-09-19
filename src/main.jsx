import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react'; 
import GiftCard from './components/GiftCard';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <GiftCard />
      <App />
    </>
  </React.StrictMode>
);
