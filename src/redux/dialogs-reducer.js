const type = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT'
}

let initialState = {
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

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_MESSAGE:
      return {
        ...state,
        names: [...state.names],
        messages: [...state.messages, {id: 4, text: state.textareaText, isOwner: false}],
        textareaText: ''
      };
    case type.UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        textareaText: action.newText
      }
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ type: type.ADD_MESSAGE })
export const updateMessageTextActionCreator = (text) => ({type: type.UPDATE_NEW_MESSAGE_TEXT, newText: text})
