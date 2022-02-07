import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmmount: "",
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
      ammunt: userInput.enteredAmmount,
      date: new Date(userInput.enteredDate),
    };

    console.log("Response: ", expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmmount: "",
      enteredDate: "",
    });

    props.onSaveExpenseData(expenseData);
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
          name="enteredAmmount"
          value={userInput.enteredAmmount}
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
        <button type="submit">Agregar Gasto</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
