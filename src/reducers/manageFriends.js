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
              const filteredFriends = state.friends.filter(friend => friend.id !== action.id)
            return { friends: [
                ...filteredFriends
            ]}
          default:
            return state
        }
}
