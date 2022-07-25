import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const today = new Date();

    const [state, setState] = useState({
        hours: today.getHours() % 12 ? today.getHours() % 12 : 12,
        minutes: today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes(),
        seconds: today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds(),
        session: today.getHours() >= 12 ? 'pm' : 'am'
    });


    useEffect(() => {
        const intervalID = setInterval(() =>
        setState({
            hours: today.getHours() % 12 ? today.getHours() % 12 : 12,
            minutes: today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes(),
            seconds: today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds(),
            session: today.getHours() >= 12 ? 'pm' : 'am'
          }), 1000);
        return () => {
          clearInterval(intervalID);
        }
      }, [state])

    return (
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={state.hours}
                minutes={state.minutes}
                seconds={state.seconds}
                session={state.session}/>
    );
}