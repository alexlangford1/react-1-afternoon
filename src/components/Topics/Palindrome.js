import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
        userInput: '',
        palindrome: []
    };
}

handler(val){
    this.setState({userInput: val})
}
checker(val){
    let before = this.state.userInput;
    let after = false;
    let reverse = before.split('').reverse().join('');
    if(reverse === before){
        after = true;
    }
    this.setState({palindrome: after})
}
  render() {
    return (
       <div className="puzzleBox filterObjectPB">
       <h4>Palindrome</h4>
   <input onChange={(e) => this.handler(e.target.value)} className="inputLine"/>
   <button onClick={() => this.checker(this.state.userInput)} className="confirmationButton">Check</button>
   <span className="resultsBox filterObjectRB">Palindrome { JSON.stringify(this.state.palindrome, null, 10) } </span>
       </div>
    )
  }
}