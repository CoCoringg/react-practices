import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(props) {
        super(props);   
        
        // this.no vs this.state.no
        this.no = 10;
        this.state = {
            no: 10
        };
    }

    onClickHandler() {
        // this.no vs this.state.no
        this.no++;
        console.log('TitelBar01 clicked!:<this.no>' + this.no);
        this.setState({
            no: this.state.no + 1
        })
        console.log('TitelBar01 clicked!:<this.state.no>' + this.state.no);
    }

    render() {
        return (
            <h1
                onClick={this.onClickHandler.bind(this)}
                style={{
                    cursor: 'pointer'
                }}>
                Function Handler(Class Component)
                <br/>
                {
                    // this.no VS this.state.no
                    `${this.no} VS ${this.state.no}`
                    // 랜더링되서 this.no도 증가하는 것 처럼 보임
                }
            </h1>
        )
    }
}