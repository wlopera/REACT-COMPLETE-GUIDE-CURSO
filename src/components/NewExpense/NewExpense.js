import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = (isShow) => {
    setShowForm(isShow);
  };

  const saveExpensedDataHandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={() => showFormHandler(true)}>
          Agregar nuevo gasto
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpensedDataHandler}
          onCancel={showFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
