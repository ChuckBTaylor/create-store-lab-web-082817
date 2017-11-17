import cuid from 'cuid'

export default function manageUsers(state = {users: []}, action){
  switch(action.type){
    case "ADD_USER":
      const newUser = Object.assign({}, action.user)
      const newUsers = state.users.concat([newUser])
      const newState = Object.assign({}, state, {users: newUsers})
      console.log(newState);
      return newState
    default:
      return state;
  }
}
