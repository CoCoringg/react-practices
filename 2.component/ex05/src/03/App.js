import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        const today = new Date();
        this.state = {
            hours: today.getHours() % 12 ? today.getHours() % 12 : 12,
            minutes: today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes(),
            seconds: today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds(),
            session: today.getHours() >= 12 ? 'pm' : 'am'
        }
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Class Component LifeCycle Practice</h2>
                    <Clock hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} session={this.state.session}/>
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => {
            const today = new Date();
            this.setState({
                hours: today.getHours() % 12 ? today.getHours() % 12 : 12,
                minutes: today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes(),
                seconds: today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds(),
                session: today.getHours() >= 12 ? 'pm' : 'am'
            })
        }, 1000)
    }
        
}

    


