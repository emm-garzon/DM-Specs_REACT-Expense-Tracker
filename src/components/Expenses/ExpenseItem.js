import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 2, 28); // returns as an object
  // const expenseTitle = "Entertainment System";
  // const expenseAmount = 1750.0;

  // const [title, setTitle] = useState(props.title); // returns an array with exactly TWO elements, current value, and a function

  // let title = props.title; // value cannot be reassigned traditionally, see above from useState

  // const clickHandler = () => {
  //   setTitle("Updated Successfully!"); // function assigns new value, and calls the component function again to be reevaluated
  //   // title = "Updated!";
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
