// REMOVING POST
export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index,
  };
}

// ADDING POST
export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}

// ADDING COMMENT
export function addComment(comment) {
  return {
    type: "ADD_COMMENT",
    comment,
  };
}
