// Get visible posts

export default (posts, {
  text, author, sortBy, startDate, endDate,
}) =>
  posts
    .filter((post) => {
      // Always true if startDate is NOT a number (undefined), or created later than startDate
      const startDateMatch = typeof startDate !== 'number' || post.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || post.createdAt <= endDate;
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
