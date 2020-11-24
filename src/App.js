import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component"
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
    // Pass context of 'this' Verbose method
    // Soln:- ES6 arrow function
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // Response Body
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    //lexical scoping => binding to scope in which its called
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />   
        <CardList monsters={filteredMonsters} />
      </div>

    );
  }

}

export default App;
// JSX mimic what html does and creates Virtual DOM
// State changes => render called

// Component => Part of React =>
// class App extends React.Component => works

// SPA => More of data on request basis

// Syntetic event =>  fake event on dom event asks what to do
// ex- onChange={}, onClick={()=> {}}

// Destructering => Pull properties of an objects and set them to an constant
// const { monsters } =  this.state; ~ const monsters = this.state.monsters;

// Babel => newer js transpiled to older in public


// Functional components vs Class Components
// const SearchBox = () => {
// NO state, NO lifecycle method
// ** Just RENDERS HTML    
// }

// Presentational Component
// Styles element and takes functionality 
// ??? NO State  why ?? 
// Lifting state Up => 

// <button onClick={this.handleClik()}></button>
// React renders it called hnadleClick() and for sucsequent clicks it wont work
// Soln:- <button onClick={this.handleClik}></button>
// To access this soln arrow func handleClik = () => {}

// package.json
// 16.8.6 locked to same version
// ^16.8.6 atleat match to this or stable
// ~16.8.6 nearly same only changes minor .6 / . 7 
// yarn.lock => to provide same versions dependencies 
// update versions 
// yarn list react react-dom react@scripts
// npm list react react-dom react@scripts
// npm install => skip over some versions 
// npm update => 
// vulnerabilities ?? minor security conceerns with dependencies 
// fix => npm audit fix => install security less
// ------------

// Virtual DOM => replica of actual DOM in Javascript
// changed dom compared with actual dom repective update done for that node only
// Settings tools => rendering => Paint flashing
// Unidirectional flow => Building Views from State(Data), Views -> Action -> State

// setState => asyncronous call, does not gurantees when it will complete
// this.setState({ searchField: e.target.value }, () => {}) CALLBACk bad practise
// BPractice =***
// this.setState((prevState, prevProps) => {
//   return { field : prevState.field}
// }, () => { // Ever want to use state after update use callback})

// Adding props
// <App propValue={value} /> 

// Life Cycle Methods
// Mounting => component put on DOM at first
// 1.constructor => 2.super(); on extending class to pull out all their functionality
// 3. render components tells to display, props value validated
// 4. react updates DOM and refs
// 5. COMPONENTDIDMOUNT
// 6. SHOULDCOMPOENTUPDATE (nextProps, nextState) => component rerender or not 
// return true/false
// 7. COMPONENTDIDUPDATE
// 8. COMPONENTUNMOUNT => react strips component, memory leakages
