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
    tags: [],
    createdAt: moment(),
    calendarFocused: false,
    error: '',
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.body) {
      this.setState(() => ({ error: 'Please provide title and some text.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body,
        createdAt: this.state.createdAt.valueOf(),
        tags: this.state.tags.map(each => each.trim()).filter(Boolean),
      });
    }
  };

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onBodyChange = (e) => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };
  onTagChange = (e) => {
    let tags = e.target.value.replace(/^[\s]*/gm, ''); // Don't allow to start with space

    // REGEX THIS!
    // tags.trim() because throws and error when starting with spacebar,
    if (tags.trim()) {
      tags = tags
        .match(/([^`|'|""|\s]+\s{0,1})+/gm)
        .join('')
        .split(',');
    }

    this.setState(() => ({ tags }));

    console.log('tags', tags);
    console.log('state', this.state.tags);
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
        {this.state.error && <div>{this.state.error}</div>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChange}
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
          <input
            type="text"
            name="tags"
            placeholder="Tags"
            value={this.state.tags}
            onChange={this.onTagChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false} // Make it possible to pick dates from the past
          />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
