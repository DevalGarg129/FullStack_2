import React from 'react';
import Login from './components/login';
import Dashboard from './components/dashboard';

function App() {
  const path = window.location.pathname;

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', color: '#fff' }}>
      {path === '/dashboard' ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
