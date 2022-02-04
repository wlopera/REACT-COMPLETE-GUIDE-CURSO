import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Seguro de Automovil",
      ammount: 294.67,
      date: new Date(2022, 1, 1),
    },
    {
      id: "e2",
      title: "Mercado",
      ammount: 345.0,
      date: new Date(2022, 1, 4),
    },
    {
      id: "e3",
      title: "Transporte",
      ammount: 100.5,
      date: new Date(2022, 0, 3),
    },
    {
      id: "e4",
      title: "Servicio de Intenet",
      ammount: 50.7,
      date: new Date(2021, 11, 28),
    },
  ];

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
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
