import React from 'react';
import { useEffect } from 'react';

const Control = (props) => {
    
    const reset = () => {
        props.reset()
    }
    
    let intervalId;
    useEffect(() => {
        if (props.isCounting){
        // eslint-disable-next-line
        intervalId = setInterval(() => {
            props.setDisplayTime(prevTime => prevTime - (1/60));
        }, 1000)
        return () => {
            clearInterval(intervalId);
        };
    }
    }, [props.isCounting]);

    const playPause = () => {
        props.setIsCounting(prevState => !prevState)
    }
    
    return (
        <div className='control--container'>
            <span className='control' onClick={playPause} id='start_stop'>
                <i className="fa-solid fa-play control--button"></i>
                <i className="fa-solid fa-pause control--button"></i>
            </span>
            <i className="fa-solid fa-repeat restart control--button" onClick={reset} id='reset'></i>
        </div>
    )
}

export default Control;