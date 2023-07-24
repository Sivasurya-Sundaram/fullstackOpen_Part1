import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Display = ({ name, noOfRatings }) => (
  <p>
    {name} {noOfRatings}
  </p>
);
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGoodClick = () => setGood(good + 1);
  const handleBadClick = () => setBad(bad + 1);
  const handlNeutralClick = () => setNeutral(neutral + 1);
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handlNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <h1>Statistics</h1>
      <Display name='good' noOfRatings={good}/>
      <Display name='neutral' noOfRatings={neutral}/>
      <Display name='bad' noOfRatings={bad}/>
    </div>
  );
};

export default App;
