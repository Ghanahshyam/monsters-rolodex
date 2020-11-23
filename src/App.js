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
          placeholder="search monsters"
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

