import React from "react";
import "./HowItWorks.css";
import register from "../assets/HowItWorks/register.png";
import expense from "../assets/HowItWorks/expense.png";
import done from "../assets/HowItWorks/done.png";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2 className="section-title">HOW IT WORKS</h2>
      <h1 className="section-subtitle">Few Easy Steps and Done</h1>
      <p className="description">
        In just a few easy steps, you are all set to manage your business and
        personal finances. Account for every dime all in one place.
      </p>
      <div className="steps-container">
        <div className="step">
            <div className="step-reg">
          <span className="step-number">1</span>
          <div className="step-img"> <img src={register} /></div>
            </div>
          <p className="step-description">
            Register your Dime account.
          </p>
        </div>
        <div className="step">
        <div className="step-reg">
          <span className="step-number">2</span>
          <div className="step-img"><img src={expense} /></div>
          </div>
          <p className="step-description">
            Fill in the list of your Personal & Business expenses.
          </p>
        </div>
        <div className="step">
        <div className="step-reg">
          <span className="step-number">3</span>
          <div className="step-img"><img src={done} /></div>
        </div>
          <p className="step-description">
            Done, let's continue the work.
          </p>
        </div>
      </div>
      <div className="buttons-container">
        <button className="btn primary-btn">Get a Free Account</button>
        <button className="btn secondary-btn">See Pricing</button>
      </div>
    </div>
  );
};

export default HowItWorks;
