import React from 'react';

// Typical function as component:
// 
// function CourseList(props){
//     return props.courses.map( (course) => {
//       return (
//       <div key={course.id} style={props.listStyle}>
//         <h3>{course.title}</h3>
//         <span>Author: {course.author}</span>
//         <br/>
//         <a href={course.url} style={props.urlStyle}>URL: {course.url}</a>
//       </div>
//       )
//     })
//   }


// Arrow function as component
// 
const CourseList = ({courses, listStyle, urlStyle}) => {
    return courses.map( (course) => {
      return (
        <div key={course.id} style={listStyle}>
            <h3>{course.title}</h3>
            <span>Author: {course.author}</span>
            <br/>
            <a href={course.url} style={urlStyle}>URL: {course.url}</a>
        </div>
      )
    })
}

export default CourseList;