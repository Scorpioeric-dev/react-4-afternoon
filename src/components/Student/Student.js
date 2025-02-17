import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  state = {
    studentInfo: {}
  };
//this axios call is grabbing the data of each individual student and the data associated with said student
//the props.match.id is grabbing the individual id of the array of objects
  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(res => {
        // console.log(res.data)
        this.setState({
          studentInfo: res.data
        });
      });
  }

  render() {
    console.log(this.state.studentInfo);
    return (
      <div className="box">
        <h1>
          {this.state.studentInfo.first_name} {this.state.studentInfo.last_name}
        </h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    );
  }
}
