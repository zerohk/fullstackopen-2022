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

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercise: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercise: 7
  }
  const part3 = {
    name: 'State of a component',
    exercise: 14
  }
  return (
    <div>
      <Header name={course} />
      <p>
        <Content part={part1.name} exercise={part1.exercise} />
      </p>
      <p>
        <Content part={part2.name} exercise={part2.exercise} />
      </p>
      <p>
        <Content part={part3.name} exercise={part3.exercise} />
      </p>
      <p>
        <Total totalExercise={part1.exercise + part2.exercise + part3.exercise} />
      </p>
    </div>
  )
}

export default App;
