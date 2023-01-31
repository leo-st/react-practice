import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import { useState } from "react";

function NewExpense(props){
    function saveExpanseDataHandler(enteredExpenseData){
        const expanseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expanseData)
        setIsEditing(false);
    }
    const[isEditing, setIsEditing] = useState(false)

    function startEditingHandler(){
        setIsEditing(true);
    }

    function stopEditingHandler(){
        setIsEditing(false)
    }


    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing &&<ExpenseForm onSaveExpenseData={saveExpanseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
        </div>
    );
}

export default NewExpense;