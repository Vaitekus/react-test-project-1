import {addPost, deletePost, profileReducer} from "./profile-reducer";

let initialState = {
  posts: [
    {id: 1, text: "Its look cool!", likesCount: 3},
    {id: 2, text: "My first post", likesCount: 11},
    {id: 3, text: "I like it", likesCount: 4},
    {id: 4, text: "Its look strange", likesCount: 5}
  ],
  profile: null,
  isLoading: false,
  status: ""
}

test('new post should be incremented', () => {
  // test data
  let action = addPost("new post text");

  // 2 Action
  let newState = profileReducer(initialState, action);
 // 3 expectation
  expect(newState.posts.length).toBe(5);
});

test('delete post', () => {
  // test data
  let action = deletePost(1);

  // 2 Action
  let newState = profileReducer(initialState, action);
  // 3 expectation
  expect(newState.posts.length).toBe(3);
});

test('new post have certain message', () => {
  // test data
  let action = addPost("new post text");

  // 2 Action
  let newState = profileReducer(initialState, action);
  // 3 expectation
  expect(newState.posts[4].text).toBe("new post text");
});

