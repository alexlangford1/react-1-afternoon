import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
        names: ['alex', 'thomas', 'bob', 'bill', 'jenny', 'will', 'ted'],
        userInput: '',
        filteredArray: []
    };
}

handler(val){
    this.setState({userInput: val})
}
filterer(val){
    let before = this.state.names;
    let after = [];

    for(let i = 0; i < before.length; i++){
        if(before[i].startsWith(val)){
            after.push(before[i])
        }
    }
    this.setState({filteredArray: after})
}
  render() {
    return (
       <div className="puzzleBox filterObjectPB">
       <h4>Filter String</h4>
    <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) }   </span>
   <input onChange={(e) => this.handler(e.target.value)} className="inputLine"/>
   <button onClick={() => this.filterer(this.state.userInput)} className="confirmationButton">Filter</button>
   <span className="resultsBox filterObjectRB">Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
       </div>
    )
  }
}