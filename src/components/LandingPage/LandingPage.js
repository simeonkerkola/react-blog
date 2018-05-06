import React, { Component } from 'react';

// store.subscribe(() => {
//   const state = store.getState();
//   const visiblePosts = getVisiblePosts(state.posts, state.filters);
//   console.log('visiblePosts', visiblePosts);
// });

// const firstPost = store.dispatch(
//   createPost({
//     author: 'Me',
//     title: 'My First Post',
//     body: 'This is the post.',
//     createdAt: 1000,
//     totalComments: 20,
//     totalLikes: 1,
//   }),
// );
// const secondPost = store.dispatch(
//   createPost({
//     author: 'you',
//     title: 'My Second Post',
//     body: 'And this is another post',
//     createdAt: -1000,
//     totalComments: 2,
//     totalLikes: 100,
//   }),
// );
//
// const thirdPost = store.dispatch(
//   createPost({
//     author: 'you',
//     title: 'My third Post',
//     body: 'Post is this',
//     createdAt: 666,
//     totalComments: 30,
//     totalLikes: 11,
//   }),
// );
// // store.dispatch(removePost({ id: firstPost.post.id }));
// // store.dispatch(editPost(secondPost.post.id, { title: 'Updated title', author: 'Someone' }));
// // store.dispatch(setTextFilter('filter'));
// // store.dispatch(setAuthorFilter('Me'));
// // store.dispatch(sortByLikes());
// // store.dispatch(sortByComments());
// // store.dispatch(sortByDate());
// //
// // console.log('set dates');
// // store.dispatch(setStartDate(-2000));
// // store.dispatch(setEndDate(0));
// store.dispatch(setAuthorFilter());
// store.dispatch(sortByDate());
//
// const demoState = {
//   posts: [
//     {
//       id: 'q45ihjwu435t',
//       author: '1234sad',
//       title: 'First post',
//       body: 'this post will be the first',
//       tags: ['react', 'node'],
//       createdAt: 0,
//     },
//   ],
//   filters: {
//     text: 'react',
//     author: 'asdf123',
//     startDate: undefined,
//     endDate: undefined,
//   },
// };

class LandingPage extends Component {
  render() {
    return <div className="container">Moi</div>;
  }
}

export default LandingPage;
