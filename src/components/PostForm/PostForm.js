import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do YYYY'));

class PostForm extends Component {
  state = {
    title: '',
    body: '',
    createdAt: moment(),
    calendarFocused: false,
  };
  onDescriptionChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onBodyChange = (e) => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) this.setState(() => ({ createdAt })); // Prevent user to clear the date value
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onDescriptionChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false} // Make it possible to pick dates from the past
          />
          <textarea
            name="post-body"
            id="post-body"
            cols="40"
            rows="10"
            placeholder="Give it a shot!"
            value={this.state.body}
            onChange={this.onBodyChange}
          />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
