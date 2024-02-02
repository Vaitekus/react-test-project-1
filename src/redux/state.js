import {renderTree} from "../render";

let state = {
  navbarList: {
    friends: [
      {id: 1, name: "Andrew"},
      {id: 2, name: "Oleg"},
      {id: 3, name: "Sveta"},
      {id: 4, name: "Juliya"}
    ]
  },
  profilePage: {
    posts: [
      {id: 1, text: "Its look cool!", likesCount: 3},
      {id: 2, text: "My first post", likesCount: 11},
      {id: 3, text: "I like it", likesCount: 4},
      {id: 4, text: "Its look strange", likesCount: 5}
    ]
  },
  dialogsPage: {
    names: [
      {id: 1, text: "Andrew"},
      {id: 2, text: "Olga"},
      {id: 3, text: "Artem"},
      {id: 4, text: "Nataly"},
      {id: 5, text: "Oleg"},
      {id: 6, text: "Viktor"}
    ],
    messages: [
      {id: 1, text: "Hi", isOwner: false},
      {id: 2, text: "How are you?", isOwner: true},
      {id: 3, text: "I am fine", isOwner: false}
    ]
  }
}

export let addPost = (message) => {
  state.profilePage.posts.push({
    id: 5,
    text: message,
    likesCount: 0
  });
  renderTree(state);
}


export default state;
