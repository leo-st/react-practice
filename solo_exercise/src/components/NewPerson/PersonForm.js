import React, { useState } from "react";
import Button from "../UI/Button";
import styles from './PersonForm.module.css';
import Card from '../UI/Card';
import Error from "../UI/Error";

function PersonForm(props){

    const [error, setError] = useState();

    const[enteredName, setEnteredName] = useState('');
    const[enteredAge, setEnteredAge] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
          });
          return;
        }
        if (+enteredAge < 1) {
          setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).',
          });
          return;
        }
        props.onSaveExpenseData(enteredName, enteredAge);
        setEnteredName('');
        setEnteredAge('');
    };

    function nameChangeHandler(event){
        setEnteredName(event.target.value);
    }

    function ageChangeHandler(event){
        setEnteredAge(event.target.value);
    }

    function errorHandler(){
        setError();
    }

    return(
    <div>
        {error && (
            <Error 
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
            />
        )}
        <Card className={styles.input}>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input type='text' value={enteredName} onChange={nameChangeHandler} ></input>
                </div>
                <div>
                    <label>Age</label>
                    <input type='number'  value={enteredAge} onChange={ageChangeHandler}></input>
                </div>
                <Button type="submit">Add Person</Button>
            </form>
        </Card>
    </div>
    
    );
}

export default PersonForm;