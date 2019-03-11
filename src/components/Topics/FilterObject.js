import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
        unFilteredArray: [
            {
            name: 'alex',
            number: 23
        }, {
            name: 'tom',
            money: 32
        }, {
            name: 'bob',
            age: 42
        }, {
            
            nombre: 'bill',
            age: 99
        }
    ],
    
        userInput: '',
        filteredArray: []
    }
}

handler(val){
    this.setState({userInput: val})
}
filterer(val){
    let before = this.state.unFilteredArray;
    let after = [];

    for(let key in before){
        if(before[key].hasOwnProperty(val)){
            after.push(before[key])
        }
    }
    this.setState({filteredArray: after})
}
  render() {
    return (
       <div className="puzzleBox filterObjectPB">
       <h4>Filter Object</h4>
    <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
   <input onChange={(e) => this.handler(e.target.value)} className="inputLine"/>
   <button onClick={() => this.filterer(this.state.userInput)} className="confirmationButton">Filter</button>
   <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
       </div>
    )
  }
}