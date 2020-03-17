import React, { useState } from 'react';
import './App.css';
import Person from './components/Person';

const App = props => {
  const [ personsState, setPersonsState ] =  useState(
    {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    }
  );

  const switchNameHandler = () => {
    //console.log('Was clicked');
    setPersonsState({
      persons: [...personsState.persons, {name: 'OutroNome', age: 22}]
    });
  };

  return (
    <div className="App">
      {personsState.persons.map(p =>
        <Person key={p.name} name={p.name} age={p.age} />
      )}

      <button onClick={switchNameHandler}>SWITCH</button>
    </div>
  );
}

export default App;