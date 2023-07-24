import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Display = ({ name, noOfRatings }) => (
  <tr>
    <td>{name}</td>
    <td>{noOfRatings}</td>
  </tr>
);
const Statistics = ({ good = 0, bad = 0, neutral = 0, total = 0 }) => {
  if (total === 0) {
    return <p>no feedback given</p>;
  }
  const calculateAverage = () => {
    return (good - bad) / total;
  };
  const calculatePositive = () => {
    let positivePercentage = (good / total) * 100;
    return positivePercentage + " %";
  };
  return (
    <div>
      <table>
        <tbody>
          <Display name="good" noOfRatings={good} />
          <Display name="neutral" noOfRatings={neutral} />
          <Display name="bad" noOfRatings={bad} />
          <Display name="total" noOfRatings={total} />
          <Display name="average" noOfRatings={calculateAverage()} />
          <Display name="positive" noOfRatings={calculatePositive()} />
        </tbody>
      </table>
    </div>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };
  const handlNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handlNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  );
};

export default App;
