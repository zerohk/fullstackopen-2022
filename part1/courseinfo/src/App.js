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
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercise: 10
    }
      , {
      name: 'Using props to pass data',
      exercise: 7
    }
      , {
      name: 'State of a component',
      exercise: 14
    }]
  }
  return (
    <div>
      <Header name={course.name} />
      <p>
        <Content part={course.parts[0].name} exercise={course.parts[0].exercise} />
      </p>
      <p>
        <Content part={course.parts[1].name} exercise={course.parts[1].exercise} />
      </p>
      <p>
        <Content part={course.parts[2].name} exercise={course.parts[2].exercise} />
      </p>
      <p>
        <Total totalExercise={course.parts[0].exercise + course.parts[1].exercise + course.parts[2].exercise} />
      </p>
    </div>
  )
}

export default App;
