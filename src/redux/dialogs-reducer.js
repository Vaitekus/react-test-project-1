const type = {
  ADD_MESSAGE: 'ADD_MESSAGE'
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
  ]
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_MESSAGE:
      return {
        ...state,
        names: [...state.names],
        messages: [...state.messages, {id: 4, text: action.newMessage.message, isOwner: false}],
        textareaText: ''
      };
    default:
      return state;
  }
}

export const addMessageActionCreator = (text) => ({ type: type.ADD_MESSAGE, newMessage: text })
