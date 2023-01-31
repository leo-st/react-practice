import Card from "../UI//Card";
import "./Expenses.css"
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

    function filterChangeHandler(selectedYear){
      setFilteredYear(selectedYear);
      console.log(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString()===filteredYear;
    });

    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
          <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
      </div>

    );
}
export default Expenses;