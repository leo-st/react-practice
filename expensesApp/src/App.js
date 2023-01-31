import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id:'e1', title: 'Car Insurance', amount: 29.76, date: new Date(2019, 3, 26) },
  { id:'e2',title: 'Toilet paper', amount: 9.6, date: new Date(2020, 4, 27) },
  { id:'e3',title: 'Pasta', amount: 2.7, date: new Date(2022, 5, 28) },
  { id:'e4',title: 'Chocolate', amount: 23.24, date: new Date(2022, 6, 29) },
];

function App() {
  

  const[expenses, setExpenses] = useState(DUMMY_EXPENSES)

  function addExpenseHandler(expense){
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}/>
    </div>
  );
  // alternative way for jsx code
  // return React.createElement('div', {}, React.createElement('h2',{}, "Let's get started"),
  // React.createElement(Expenses, {items: expenses}));
}

export default App;
