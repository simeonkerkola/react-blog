export const totalComments = posts => posts.reduce((total, post) => total + post.comments, 0);

export const totalLikes = posts => posts.reduce((total, post) => total + post.likes, 0);
