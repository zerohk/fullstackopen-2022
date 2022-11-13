// import logo from './logo.svg';

import { useState } from "react";

// import './App.css';


const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ text, handleClicks }) => <button onClick={handleClicks}>{text}</button>

const StatisticLine = ({ text, staticState }) => <><tr><td>{text}</td><td>{staticState}</td></tr></>

function App() {
  const h1 = "give feedback"
  const h2 = "statics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)

  if (good === 0 && bad === 0 && neutral == 0) {
    return (
      <div>
        <Header text={h1} />
        <Button text="good" handleClicks={handleGood} />
        <Button text="neutral" handleClicks={handleNeutral} />
        <Button text="bad" handleClicks={handleBad} />
        <Header text={h2} />
        <div>No feedback given</div>
      </div>)
  }
  return (
    <div>
      <Header text={h1} />
      <Button text="good" handleClicks={handleGood} />
      <Button text="neutral" handleClicks={handleNeutral} />
      <Button text="bad" handleClicks={handleBad} />
      <Header text={h2} />
      <table><tbody>
        <StatisticLine text="good" staticState={good} />
        <StatisticLine text="neutral" staticState={neutral} />
        <StatisticLine text="bad" staticState={bad} />
        <StatisticLine text="all" staticState={good + neutral + bad} />
        <StatisticLine text="average" staticState={(good - bad) / (good + neutral + bad)} />
        <StatisticLine text="positive" staticState={good / (good + neutral + bad) * 100 + "%"} />
      </tbody></table>
    </div>
  )

}

export default App;
