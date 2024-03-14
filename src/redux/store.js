import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";

let store = {
  _state: {
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
      ],
      textareaText: ''
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
      ],
      textareaText: ''
    }
  },
  _callSubscriber() {
    console.log('renderTree');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbarList = navbarReducer(this._state.navbarList, action);

    this._callSubscriber(this._state);
  }
}
export default store;
