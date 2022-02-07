import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Seguro de Automovil",
    amount: 294.67,
    date: new Date(2022, 0, 1),
  },
  {
    id: "e2",
    title: "Mercado",
    amount: 345.0,
    date: new Date(2022, 1, 4),
  },
  {
    id: "e3",
    title: "Transporte",
    amount: 100.5,
    date: new Date(2020, 0, 3),
  },
  {
    id: "e4",
    title: "Servicio de Intenet",
    amount: 50.7,
    date: new Date(2021, 6, 28),
  },
  {
    id: "e5",
    title: "Servicio de TV",
    amount: 67.89,
    date: new Date(2021, 8, 28),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log("salida: ", expense);
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Pantalla de gastos"),
  //   React.createElement("hr", {}),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h1>Pantalla de gastos</h1>
      <hr />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
