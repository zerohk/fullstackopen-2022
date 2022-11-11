//import logo from './logo.svg';
//import './App.css';

function Header(course) {
  return (
    <h1>{course.name}</h1>
  )
}

function Content(course) {
  return (
    <>
      {course.part} {course.exercise}
    </>
  )
}

function Total(course) {
  return (
    <>
      Number of exercise {course.totalExercise}
    </>
  )
}

function App() {
  const courseName = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div className="App">
      <Header name={courseName} />
      <p>
        <Content part={part1} exercise={exercises1} />
      </p>
      <p>
        <Content part={part2} exercise={exercises2} />
      </p>
      <p>
        <Total totalExercise={exercises1 + exercises2 + exercises3} />
      </p>
    </div>
  );
}

export default App;
