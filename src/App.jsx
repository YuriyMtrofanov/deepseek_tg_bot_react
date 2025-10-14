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
        <img src="https://i.pinimg.com/736x/ff/36/14/ff361444a609588b9602c9307b96e621.jpg" alt="" />
      </div>
    </>
  )
}

export default App;
