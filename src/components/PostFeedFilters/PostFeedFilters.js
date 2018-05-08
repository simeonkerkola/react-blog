import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByLikes, sortByComments } from '../../actions/filters';

const PostListFilters = ({ filters, dispatch }) => (
  <div>
    <input
      type="text"
      defaultValue={filters.text}
      onChange={(e) => {
        dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      name="sotBy"
      id="sortBy"
      value={filters.sortBy}
      onChange={(e) => {
        e.target.value === 'date' && dispatch(sortByDate());
        e.target.value === 'likes' && dispatch(sortByLikes());
        e.target.value === 'comments' && dispatch(sortByComments());
      }}
    >
      <option value="date">Date</option>
      <option value="likes">Likes</option>
      <option value="comments">Comments</option>
    </select>
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(PostListFilters);
