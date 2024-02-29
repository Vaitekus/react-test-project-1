const type = {
  ADD_POST: 'ADD-POST',
  UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
  ADD_MESSAGE: 'ADD_MESSAGE',
  UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT'
}

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
    if(action.type === type.ADD_POST) {
      this._state.profilePage.posts.push({
        id: 5,
        text: this._state.profilePage.textareaText,
        likesCount: 0
      });
      this._state.profilePage.textareaText = '';
      this._callSubscriber(this._state);
    } else if(action.type === type.UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.textareaText = action.newText;
      this._callSubscriber(this._state);
    } else if(action.type === type.ADD_MESSAGE) {
      this._state.dialogsPage.messages.push({
        id: 4,
        text: this._state.dialogsPage.textareaText,
        isOwner: false
      });
      this._state.dialogsPage.textareaText = '';
      this._callSubscriber(this._state);
    } else if(action.type === type.UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.textareaText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: type.ADD_POST })
export const updatePostTextActionCreator = (text) => ({type: type.UPDATE_NEW_POST_TEXT, newText: text})

export const addMessageActionCreator = () => ({ type: type.ADD_MESSAGE })
export const updateMessageTextActionCreator = (text) => ({type: type.UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default store;
