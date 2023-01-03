import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 29.76, date: new Date(2021, 3, 26) },
    { title: 'Toilet paper', amount: 9.6, date: new Date(2021, 4, 27) },
    { title: 'Pasta', amount: 2.7, date: new Date(2021, 5, 28) },
    { title: 'Chocolate', amount: 23.24, date: new Date(2021, 6, 29) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
  // alternative way for jsx code
  // return React.createElement('div', {}, React.createElement('h2',{}, "Let's get started"),
  // React.createElement(Expenses, {items: expenses}));
}

export default App;
