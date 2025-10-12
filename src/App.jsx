import { useEffect } from 'react';
import './App.css'
const tg = window.Telegram.WebbApp;

function App() {
  
  useEffect(() => {
    tg.ready();
  }, []);

  const handleClose = () => {
    tg.close();
  };

  return (
    <>
      <div className='App'>
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

export default App
