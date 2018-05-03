import React from 'react';

const EditPostPage = (props) => {
  console.log(props);
  return <div>Editing the post id: {props.match.params.id}</div>;
};

export default EditPostPage;
