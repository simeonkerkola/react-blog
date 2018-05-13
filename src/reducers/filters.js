import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  author: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SET_AUTHOR_FILTER':
      return { ...state, author: action.author };
    case 'SET_START_DATE':
      return { ...state, startDate: action.timestamp };
    case 'SET_END_DATE':
      return { ...state, endDate: action.timestamp };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_LIKES':
      return { ...state, sortBy: 'likes' };
    case 'SORT_BY_COMMENTS':
      return { ...state, sortBy: 'comments' };
    default:
      return state;
  }
};
