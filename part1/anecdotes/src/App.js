// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(7))
  const [most, setMost] = useState(0)

  const randomInteger = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVotes = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    if (copy[selected] > copy[most]) {
      setMost(selected)
    }
  }

  return (
    <div>
      <Header text="Anecdotes of the day" />
      {anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <div>
        <Button onClick={addVotes} text="vote" />
        <Button onClick={randomInteger} text="next anecdotes" />
      </div>
      <Header text="Anecdotes with most votes" />
      <div>{anecdotes[most]}</div>
      <div>has {points[most]} votes</div>
    </div>
  );
}

export default App;
