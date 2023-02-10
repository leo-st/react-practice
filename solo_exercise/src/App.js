import './App.css';
import React, {useState} from 'react';
import PersonForm from './components/NewPerson/PersonForm';
import PersonList from './components/Person/PersonList';

const DUMMY_PERSONS = [
];

function App() {

  function saveExpanseDataHandler(name, age){
    setPersons((prevExpenses)=>{
      return [{name: name, age: age, id: Math.random().toString()}, ...prevExpenses]
    });
}

  const [persons, setPersons] = useState(DUMMY_PERSONS);

  return (
    <div className="App">
      <h2>Person App</h2>
      <PersonForm onSaveExpenseData={saveExpanseDataHandler}></PersonForm>
      <PersonList items={persons}></PersonList>
    </div>
  );
}

export default App;
