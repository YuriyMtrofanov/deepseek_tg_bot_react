import React, { useEffect } from 'react';
import './App.css'
const tg = window.Telegram.WebbApp;

function App() {
  
  useEffect(() => {
    // tg.ready();
    console.log("in progress");
  }, []);

  const handleClose = () => {
    // tg.close();
    console.log("close");
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
