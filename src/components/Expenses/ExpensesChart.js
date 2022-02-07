import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoint = [
    { label: "Ene", value: "0" },
    { label: "Feb", value: "0" },
    { label: "Mar", value: "0" },
    { label: "Abr", value: "0" },
    { label: "May", value: "0" },
    { label: "Jun", value: "0" },
    { label: "Jul", value: "0" },
    { label: "Ago", value: "0" },
    { label: "Sep", value: "0" },
    { label: "Oct", value: "0" },
    { label: "Nov", value: "0" },
    { label: "Dic", value: "0" },
  ];

  props.expenses.forEach((expense) => {
    // Comenzar en 0 => Enero => 0
    const expenseMonth = expense.date.getMonth();
    chartDataPoint[expenseMonth].value += expense.amount;
  });

  return <Chart dataPoints={chartDataPoint} />;
};

export default ExpensesChart;
