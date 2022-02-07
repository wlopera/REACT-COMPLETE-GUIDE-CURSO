import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredamount: "",
    enteredDate: "",
  });

  const userInputChangeHandler = (event) => {
    setUserInput((prevState) => {
      prevState[event.target.name] = event.target.value;
      //console.log(event.target.name, event.target.value);
      return {
        ...prevState,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredamount,
      date: new Date(userInput.enteredDate),
    };

    setUserInput({
      enteredTitle: "",
      enteredamount: "",
      enteredDate: "",
    });

    props.onSaveExpenseData(expenseData);
    props.onCancel(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <label>Título: </label>
        <input
          type="text"
          onChange={userInputChangeHandler}
          name="enteredTitle"
          value={userInput.enteredTitle}
        />
      </div>
      <div className="new-expense__controls">
        <label>Monto: </label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={userInputChangeHandler}
          name="enteredamount"
          value={userInput.enteredamount}
        />
      </div>
      <div className="new-expense__controls">
        <label>Fecha: </label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={userInputChangeHandler}
          name="enteredDate"
          value={userInput.enteredDate}
        />
      </div>
      <div className="new-expense__actions">
        <button onClick={() => props.onCancel(false)}>Cancelar</button>
        <button type="submit">Agregar Gasto</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
