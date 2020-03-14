import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Fabricio', age: 37 },
      { name: 'Dandara', age: 26 },
      { name: 'Filipe', age: 31 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked');
  };

  render() {
    return (
      <div className="App">
        {this.state.persons.map(p =>
          <Person key={p.name} name={p.name} age={p.age} />
        )}

        <button onClick={this.switchNameHandler}>SWITCH</button>
      </div>

    );
  }

}

export default App;
