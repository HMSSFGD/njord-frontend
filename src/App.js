import React from 'react';
import './App.css';
import Map from './Map.js';

export default function App() {
  return (
    <>
      <div
        position="fixed"
        style={{
          backdropFilter: 'blur(5px)',
          opacity: '100%',
          color: 'white',
          boxShadow: 'none',
          minHeight: 100,
          background: 'linear-gradient(90deg, rgba(24,30,48,1) 0%, rgba(16,44,47,1) 38%, rgba(42,15,62,0.95) 100%)',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          padding: '0 3rem',
        }}>
        <div style = {{fontFamily: 'Cormorant Garamond', fontSize: '35pt', color: 'white', lineHeight: '1'}}>
          Njord.
        </div>
      </div>
      <Map />
    </>
  );
}
