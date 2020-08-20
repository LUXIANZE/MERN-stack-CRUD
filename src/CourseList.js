import React from 'react';

function CourseList(props){
    return props.courses.map( (course) => {
      return (
      <div key={course.id} style={props.listStyle}>
        <h3>{course.title}</h3>
        <span>Author: {course.author}</span>
        <br/>
        <a href={course.url} style={props.urlStyle}>URL: {course.url}</a>
      </div>
      )
    })
  }

export default CourseList;