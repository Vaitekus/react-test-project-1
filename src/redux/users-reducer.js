const type = {
  TOGGLE: 'TOGGLE',
  SET_USERS: 'SET-USERS'
}

let initialState = {
  users: [
    {id: 1, followed: true, fullName: 'Olha', location: {country: 'Ukraine', city: 'Kharkiv'}, message: 'I like my country'},
    {id: 2, followed: true, fullName: 'Kate', location: {country: 'Ukraine', city: 'Kiev'}, message: 'Its cool'},
    {id: 3, followed: true, fullName: 'Mark', location: {country: 'Poland', city: 'Krakow'}, message: 'I am from EU'},
    {id: 4, followed: false, fullName: 'Sergey', location: {country: 'Czech republic', city: 'Praha'}, message: 'Beer .....'},
    {id: 5, followed: true, fullName: 'Oleg', location: {country: 'Ukraine', city: 'Rivne'}, message: 'Be brave'},
    {id: 6, followed: true, fullName: 'Piter', location: {country: 'USA', city: 'New York'}, message: '....'}
  ],
  textareaText: ''
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.TOGGLE:{
      return {
        ...state,
        users: state.users.map((user) => {
          if(user.id === action.userId) {
            return {...user, followed: !user.followed}
          }
          return user
        })
      };
    }
    case type.SET_USERS: {
      return {
        ...state, users: [...state.users, ...action.users]
      }
    }
    default:
      return  state;
  }
}

export const toggleActionCreator = (userId) => ({ type: type.TOGGLE, userId })
export const setUsersActionCreator = (users) => ({ type: type.SET_USERS, users })
