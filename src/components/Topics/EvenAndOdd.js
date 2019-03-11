import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    updateInput(val){
        this.setState({userInput: val})
    }
    evenFinder = (userInput) => {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];

        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                evens.push(Number(arr[i]))
            } else {
                odds.push(Number(arr[i]))
            }
        }
        this.setState({evenArray: evens, oddArray: odds})
    }



  render() {
    return (
       <div className='puzzleBox evenAndOdd'>
            <h4>Evens And Odds</h4>
            <input onChange={(e) => this.updateInput(e.target.value)} className="inputLine"/>
            <button onClick={() => this.evenFinder(this.state.userInput)} className="confirmationButton">Split</button>
           <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
      <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>

       </div>
    )
  }
}