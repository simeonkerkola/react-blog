import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByLikes,
  sortByComments,
  setStartDate,
  setEndDate,
} from '../../actions/filters';

class PostListFilters extends Component {
  state = {
    focusedInput: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />

        <select
          name="sotBy"
          id="sortBy"
          value={this.props.filters.sortBy}
          onChange={(e) => {
            e.target.value === 'date' && this.props.dispatch(sortByDate());
            e.target.value === 'likes' && this.props.dispatch(sortByLikes());
            e.target.value === 'comments' && this.props.dispatch(sortByComments());
          }}
        >
          <option value="date">Date</option>
          <option value="likes">Likes</option>
          <option value="comments">Comments</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="Start date"
          endDate={this.props.filters.endDate}
          endDateId="End date"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          numberOfMonths={1} // Just show 1 month at the time
          isOutsideRange={() => false} // Make past dates available to pick
          showClearDates // x to click and clear the dates
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(PostListFilters);
