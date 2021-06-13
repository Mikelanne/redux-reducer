export function manageFriends(state = {friends: []}, action){
        switch(action.type) {
          case 'ADD_FRIEND':
            return { friends: [
                ...state.friends,
                { 
                    name: action.friend.name,
                    hometown: action.friend.hometown,
                    id: action.friend.id
                }
            ]}
          case 'REMOVE_FRIEND':
            return { friends: [
                ...state.friends.slice(0, action.friend.id)
            ]}
          default:
            return state
        }
}
