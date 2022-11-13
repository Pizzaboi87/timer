import React from 'react';

const Break = (props) => {
    
    const timeDown = () => {
        props.breakTime > 1
        ? props.setBreakTime(prevTime => prevTime - 1)
        : props.setBreakTime(1);
    }
    
    const timeUp = () => {
        props.breakTime < 60
        ? props.setBreakTime(prevTime => prevTime + 1)
        : props.setBreakTime(60)
    }
    
    return (
        <div className='break--container'>
            <h3 id='break-label'>Break Length</h3>
            <span className='arrow'>
            <i className="fa-solid fa-circle-up arrow--icon" onClick={timeUp} id='break-increment'></i>
            <p className='arrow--text' id='break-length'>{props.breakTime}</p>
            <i className="fa-solid fa-circle-down arrow--icon" onClick={timeDown} id='break-decrement'></i>
            </span>
        </div>
    )
}

export default Break;