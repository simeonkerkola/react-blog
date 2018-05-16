export const totalComments = posts => posts.reduce((total, post) => total + post.totalComments, 0);

export const totalLikes = posts => posts.reduce((total, post) => total + post.totalLikes, 0);
