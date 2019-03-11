import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        };
    }

    handler = (val) => {
        this.setState({ num1: Number(val) })
    }
    handler2 = (val) =>  {
        this.setState({ num2: Number(val) })
    }
    adder = (val1, val2) => {
        
        this.setState({ sum: val1 + val2 })
        }
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Get Sum</h4>
                <input onChange={(e) => this.handler(e.target.value)} className="inputLine" />
                <input onChange={(e) => this.handler2(e.target.value)} className="inputLine" />
                <button onClick={() => this.adder(this.state.num1, this.state.num2)} className="confirmationButton">Add</button>
                <span className="resultsBox filterObjectRB">Sum: {this.state.sum} </span>
            </div>
        )
    }
}


