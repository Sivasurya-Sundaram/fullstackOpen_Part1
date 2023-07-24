import { useState } from "react";
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const AnecdotesDisplay = ({ anecdotes }) => {
  return (
    <div>
      <p>{anecdotes.anecdotesText}</p>
      <p>has {anecdotes.anecdotesVotes} votes</p>
    </div>
  );
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(anecdotes.map((x) => (x = 0)));
  console.log(votes);
  console.log(selected);
  const generateIndex = () => Math.floor(Math.random() * anecdotes.length);
  const handleNextClick = () => {
    let index = generateIndex();
    let counter=0
    while (index === selected && counter<5) {
      console.log(index);
      generateIndex();
      counter++;
    }
    console.log(index);
    setSelected(index);
  };
  const handleVoteClick = () => {
    const updatedVotes = votes.map((item, index) => {
      if (index === selected) {
        return (item += 1);
      } else {
        return item;
      }
    });
    setVotes(updatedVotes);
  };
  const anecdotesValue = {
    anecdotesText: anecdotes[selected],
    anecdotesVotes: votes[selected],
  };
  const getMaxVotedAnecdotesData = () => {
    const max = Math.max(...votes);
    const maxIndex = votes.indexOf(max);
    return {
      anecdotesText: anecdotes[maxIndex],
      anecdotesVotes: votes[maxIndex],
    };
  };
  return (
    <div>
      <h1>Anecdotes of the Day</h1>
      <AnecdotesDisplay anecdotes={anecdotesValue} />
      <Button handleClick={handleVoteClick} text="Vote" />
      <Button handleClick={handleNextClick} text="Next Anecdotes" />
      <h1>Anecdote with most votes</h1>
      <AnecdotesDisplay anecdotes={getMaxVotedAnecdotesData()} />
    </div>
  );
};

export default App;
