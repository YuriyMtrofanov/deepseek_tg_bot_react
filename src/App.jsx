import React, { useEffect } from 'react';
import './App.css'

const tg = window.Telegram.WebApp;

function App() {
  
  useEffect(() => {
    tg.ready();
    console.log("tg ready", tg.initData);
  }, [tg]);

  const handleClose = () => {
    tg.close();
    console.log("close app");
  };

  return (
    <>
      <div>
        <button
          className='button'
          onClick = {handleClose}
        >
            Close
        </button>
      </div>
    </>
  )
}

export default App;
