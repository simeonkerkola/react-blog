import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../actions/filters';

const PostListFilters = ({ filters, dispatch }) => (
  <div>
    <input
      type="text"
      defaultValue={filters.text}
      onChange={(e) => {
        dispatch(setTextFilter(e.target.value));
        console.log(e.target.value);
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(PostListFilters);
