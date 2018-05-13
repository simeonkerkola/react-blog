import moment from 'moment';

// Get visible posts
export default (posts, {
  text, author, sortBy, startDate, endDate,
}) =>
  posts
    .filter((post) => {
      const createdAtMoment = moment(post.createdAt);
      // Always true if there is NO startDate (undefined), or created later than startDate
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const authorMatch = post.author.toLowerCase().includes(author.toLowerCase());
      const textMatch =
        post.title.toLowerCase().includes(text.toLowerCase()) ||
        post.body.toLowerCase().includes(text.toLowerCase());

      // Return true only if all these cases match
      return startDateMatch && endDateMatch && authorMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') return a.createdAt < b.createdAt ? 1 : -1;
      else if (sortBy === 'comments') return b.totalComments - a.totalComments;
      else if (sortBy === 'likes') return b.totalLikes - a.totalLikes;
      return 0;
    });
