import React, { useState } from "react";
import "./PlanCard.css";

function PlanCard({ plan }) {
  const [complete, setComplete] = useState(false);

  function handleCheck() {
    setComplete(true);
  }

  return (
    <>
      {complete ? (
        <div className="checked-container">
          <span className="checked">{plan}</span>
        </div>
      ) : (
        <div className="card-container">
          <div className="plan">{plan}</div>
          <div className="icon-container">
            <div className="icons">
              <i onClick={handleCheck} class="bi bi-patch-check-fill"></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PlanCard;
