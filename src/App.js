import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title.js';
import Break from './components/Break.js';
import Session from './components/Session.js';
import Display from './components/Display.js';
import Control from './components/Control.js';

const App = () => {
    
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [displayTime, setDisplayTime] = useState(sessionTime);
  const [isSession, setIsSession] = useState(true);
  const [isCounting, setIsCounting] = useState(false);
    
  useEffect(() => {
    setDisplayTime(sessionTime)
  }, [sessionTime])
    
  let minute;
  let second;
  let time;
  const correctTime = () => {
    time = Math.floor(displayTime * 60);
    minute = Math.floor(time / 60);
    second = 
      (time - minute * 60) <= 9 
      ? '0' + (time - minute * 60).toFixed() 
      : (time - minute * 60).toFixed();
    console.log(time)
  }
  correctTime();

  const beep = document.getElementById('beep');

  if (time <= 0) {
    beep.play()
  }

  useEffect(() => {
    if (time.toFixed() === 0) {
      setDisplayTime('0:00')
    } else if (displayTime < 0 && isSession){
        setDisplayTime(breakTime)
        setIsSession(false) 
    } else if (displayTime < 0 && !isSession){
        setDisplayTime(sessionTime)
        setIsSession(true)
    }
  // eslint-disable-next-line  
  }, [displayTime])

  const reset = () => {
    setBreakTime(5)
    setSessionTime(25)
    setDisplayTime(sessionTime)
    setIsSession(true)
    setIsCounting(false)
  }
    
  return (
    <div className='container'>
      <Title />
      <Break 
        breakTime={breakTime}
        setBreakTime={setBreakTime}
      />
      <Session 
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
      />
      <div className='space'></div>
      <>
        <Display 
          displayTime={displayTime}
          minute={minute}
          second={second}
          isSession={isSession}
        />
        <audio id='beep'>
          <source src='../audio/beep.mp3'></source>
        </audio>
      </>
      <div className='space'></div>
      <Control 
        setDisplayTime={setDisplayTime}
        reset={reset}
        isCounting={isCounting}
        setIsCounting={setIsCounting}
      />
    </div>
  )
}

export default App;