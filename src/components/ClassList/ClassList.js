import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    // console.log(this.props)
    //So here im accessing the api and having the query of defined path dependent on established route path
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      //This allows me to access the value of any route params,match,history

      .then(results => {
        this.setState({
          students: results.data
        });
      });
  }

  //mapping over the db.json //remember react requires a unique key prop on mapped elements//giving the pathway to mapped object of (id student)
  render() {
    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        <h3>
          {student.first_name} {student.last_name}
        </h3>
      </Link>
    ));

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    );
  }
}
//rendering the mapped Fn {students}