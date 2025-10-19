import React, { useEffect } from 'react';
import './App.css';
import useTelegram from "./hooks/useTelegram";

function App() {

  const {tg, handleToggleButton} = useTelegram();
  
  useEffect(() => {
    tg.ready();
    console.log("tg ready", tg.initData);
  }, [tg]);

  return (
    <div className="App">
      <button onClick={handleToggleButton}>Toggle</button>
      {/* <img className="gorilla" src="https://i.pinimg.com/736x/ff/36/14/ff361444a609588b9602c9307b96e621.jpg" alt="" /> */}
    </div>
  )
};

export default App;
