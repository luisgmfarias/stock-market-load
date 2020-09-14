import React from 'react';
import './App.scss';
import Login from './views/Login'
import Content from './views/Content'

function App() {
  return (
    <div className="main-container">
      <Login/>
      <Content/>
    </div>
  );
}

export default App;
