import React from 'react';

const Session = (props) => {
    
    const timeDown = () => {
        props.sessionTime > 1
        ? props.setSessionTime(prevTime => prevTime - 1)
        : props.setSessionTime(1);
    }
    
    const timeUp = () => {
        props.sessionTime < 60
        ? props.setSessionTime(prevTime => prevTime + 1)
        : props.setSessionTime(60)
    }
    
    return (
        <div className='session--container'>
            <h3 id='session-label'>Session Length</h3>
            <span className='arrow'>
            <i className="fa-solid fa-circle-up arrow--icon" onClick={timeUp} id='session-increment'></i>
            <p className='arrow--text' id='session-length'>{props.sessionTime}</p>
            <i className="fa-solid fa-circle-down arrow--icon" onClick={timeDown} id='session-decrement'></i>
            </span>
        </div>
    )
}

export default Session;