import React from 'react';
import CourseList from './CourseList';
import './App.css';


// Constants within this section
const greeting = 'Hello'
const name = 'LU XIANZE'
const courses = [
  {
    id: 1,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    author: "Maximilian Schwarzmülller",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"
  },
  {
    id: 2,
    title: "Modern React with Redux",
    author: "Stephen Grider",
    hours_video: 47.5,
    number_of_lectures: 488,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/modern-react-with-redux/"
  },
  {
    id: 3,
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    author: "Andrew Mead",
    hours_video: 39,
    number_of_lectures: 200,
    rating: 4.7,
    url: "http://codingthesmartway.net/courses/complete-react-web-app-developer/"
  }
]
// Constants within this section

// CSS styles within this section
const wrapprStyle = {
  padding: '100px'
}

const listStyle = {
  padding: '50px 0px 0px 0px'
}

const urlStyle = {
  textDecoration: 'none',
  color: 'green'
}

function greet(greeting, name){
  return greeting + ", " + name + "!"
}
// CSS styles within this section

// React Component within this section
function App() {
  return (
    <div style={wrapprStyle}>
      <h1>List of items with JSX</h1>
      <hr></hr>
      <CourseList courses={courses} urlStyle={urlStyle} listStyle={listStyle}/>
    </div>
  );
}


// React Component within this section

export default App;
