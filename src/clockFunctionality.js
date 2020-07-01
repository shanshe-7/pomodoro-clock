import React, {useState, useEffect,  useRef} from 'react';
import moment from 'moment';
import momentDurationFormat from 'moment-duration-format';
import ClockDisplay from './clockDisplay';


momentDurationFormat(moment);
function Clock (){
    const audioElement = useRef(null);
    
    const [running, setRunning] = useState(false);
    const [changeColor, setChangeColor] = useState(false);
    const [currentType, setCurrentType]  = useState("Session");
    const [breakLength, setBreakLenght] = useState(300);
    const [sessionLength, setSessionLenght] = useState(25*60);
    const [timeLeft, SetTimeLeft] = useState(sessionLength);
    const [intervalId, setIntervalId] = useState(null);


    const handleBreakLengthIncrement = () => {
        if(running === false){
            if(breakLength >= 3540){
                return breakLength
            }else{
                setBreakLenght(breakLength + 60);
            }
        }

    }

    const handleBreakLengthDecrement = () => {
        if(running === false){
            if(breakLength<=60){
                return breakLength;
            }else{
                setBreakLenght(breakLength - 60);
            }
        }

    }

    const handleSessionLengthIncrement = () => {
        if(running === false){
            if(sessionLength >= 3540){
                return sessionLength
            }else{
                setSessionLenght(sessionLength + 60);
            }
        }

    }

    const handleSessionLengthDecrement = () => {
        if(running === false){
            if(sessionLength <= 60){
                return sessionLength
            }else{
                setSessionLenght(sessionLength - 60);
            }
        }
    }

    useEffect(() => {
        SetTimeLeft(sessionLength);
    }, [sessionLength]);

    useEffect(()=>{
        if(timeLeft === 0){
            audioElement.current.play();
            if(currentType === 'Session'){
                setCurrentType('Break');
                SetTimeLeft(breakLength);
            }else if(currentType === 'Break'){
                setCurrentType('Session');
                SetTimeLeft(sessionLength);
            }
        }

        if(timeLeft < 60 && timeLeft>=0){
            setChangeColor(true);
        }else{
            setChangeColor(false);
        }
    }, [timeLeft, breakLength, currentType, sessionLength]);

    const isStarted = intervalId !== null;
    const hanldeStartClick = () => {
        if(isStarted){
            clearInterval(intervalId);
            setIntervalId(null);
        }else{
            const newIntervarId = setInterval(() => {
                SetTimeLeft(prevState => prevState - 1);
            }, 1000);
            setIntervalId(newIntervarId);
        }
        setRunning(!running);
    }


    const handleResetClick = () => {
        audioElement.current.load();
        clearInterval(intervalId);
        setIntervalId(null);
        setCurrentType('Session');
        setSessionLenght(25*60);
        setBreakLenght(5*60);
        SetTimeLeft(25*60);
    }

    const newBreak = moment.duration(breakLength, 's').minutes();
    const newSession = moment.duration(sessionLength, 's').minutes();
    const newTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false})
    return(
        <>
            <ClockDisplay 
                sessionType = {currentType}
                breakLength={newBreak}
                sessionLength={newSession}
                timeLeft={newTimeLeft}
                isStarted={isStarted}
                changeColor={changeColor}
                handleBreakLengthIncrement = {handleBreakLengthIncrement}
                handleBreakLengthDecrement = {handleBreakLengthDecrement}
                handleSessionLengthDecrement = {handleSessionLengthDecrement}
                handleSessionLengthIncrement = {handleSessionLengthIncrement}
                hanldeStartClick = {hanldeStartClick}
                handleResetClick = {handleResetClick}
            />
            <audio ref={audioElement}>
                <source src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" type="audio/wav" />
            </audio>
        </>
    )
}
export default Clock;