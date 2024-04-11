const type = {
  ADD_POST: 'ADD-POST',
  UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT'
}

let initialState = {
  posts: [
    {id: 1, text: "Its look cool!", likesCount: 3},
    {id: 2, text: "My first post", likesCount: 11},
    {id: 3, text: "I like it", likesCount: 4},
    {id: 4, text: "Its look strange", likesCount: 5}
  ],
  textareaText: ''
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_POST:{
      return {
        ...state,
        posts: [...state.posts, {id: 5, text: state.textareaText, likesCount: 0}],
        textareaText: ''
      };
    }
    case type.UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        textareaText: action.newText
      };
    }
    default:
      return  state;
  }
}

export const addPostActionCreator = () => ({ type: type.ADD_POST })
export const updatePostTextActionCreator = (text) => ({type: type.UPDATE_NEW_POST_TEXT, newText: text})
