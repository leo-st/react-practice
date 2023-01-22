import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props){
    function saveExpanseDataHandler(enteredExpenseData){
        const expanseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expanseData)
    }


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpanseDataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;