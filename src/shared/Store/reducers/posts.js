const initialState = {
  posts_all: []
}

export default ((state = {...initialState}, action) => {
  switch (action.type){
    case 'GET_POSTS':
      return {
        ...state,
        posts: [
          ...state.posts,
          ...action.data
        ]
      }
    default:
      return { ...state }
  }
})
