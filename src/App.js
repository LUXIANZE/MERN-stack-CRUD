import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const greeting = 'Hello'
  const name = 'LU XIANZE'

  function greet(greeting, name){
    return greeting + ", " + name + "!"
  }

  
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

  const wrapprStyle = {
    padding: '100px'
  }

  const listStyle = {
    padding: '50px 0px 0px 0px'
  }



  return (
    <div style={wrapprStyle}>
      <h1>List of items with JSX</h1>
      <hr></hr>

      {courses.map( (course) => {
        return (
        <div key={course.id} style={listStyle}>
          <h3>{course.title}</h3>
          <span>Author: {course.author}</span>
          <br/>
          <span>URL: {course.url}</span>
        </div>
        )
      })}
    </div>
  );
}

export default App;
