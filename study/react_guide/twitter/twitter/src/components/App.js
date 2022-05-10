import React, { useState } from 'react';
import AppRouter from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />    
      <footer>&copy; Twitter</footer>
    </>
  );
}

export default App;
