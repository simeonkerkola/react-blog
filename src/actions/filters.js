// setTextFilter
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// setAuthorFilter
export const setAuthorFilter = (author = '') => ({
  type: 'SET_AUTHOR_FILTER',
  author,
});

// setStartDate
export const setStartDate = timestamp => ({
  type: 'SET_START_DATE',
  timestamp,
});

// setEndDate
export const setEndDate = timestamp => ({
  type: 'SET_END_DATE',
  timestamp,
});

// sortByDate
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// sortByLikes
export const sortByLikes = () => ({
  type: 'SORT_BY_LIKES',
});

// sortByComments
export const sortByComments = () => ({
  type: 'SORT_BY_COMMENTS',
});
