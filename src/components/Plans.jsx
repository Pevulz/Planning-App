import React, { useEffect } from "react";
import "./Plans.css";
import { useState } from "react";
import PlanCard from "./PlanCard";

function Plans() {
  const [plans, setPlans] = useState([]);
  const [input, setInput] = useState("");
  var id = 0;

  function addToPlan(e) {
    e.preventDefault();
    //better search if possible
    for (let i = 0; i < plans.length; i++) {
      if (plans[i].toLowerCase() == input.toLowerCase() || input == "") {
        setInput("");
        return;
      }
    }
    const newPlans = [...plans, input];

    setPlans(newPlans);
    setInput("");
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Plans</h1>

        <form className="userForm" onSubmit={addToPlan}>
          <input
            className="userInput"
            type="text"
            placeholder="To Do"
            value={input}
            name="text"
            onChange={handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>

        <div className="plan-container">
          {!plans.length ? (
            <span className="defaultDisplay">You have no plans</span>
          ) : (
            plans.map((plan) => <PlanCard plan={plan} key={id++}></PlanCard>)
          )}
        </div>
      </div>
    </>
  );
}

export default Plans;
