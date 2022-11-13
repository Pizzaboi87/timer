import React from 'react';

const Display = (props) => {
    
    return (
        <div className='display--container'>
            <h3 id='timer-label'>{props.isSession ? 'Session' : 'Break'}</h3>
            <p className='display--text' id='time-left'>{props.minute}:{props.second}</p>
        </div>
    )
}

export default Display;