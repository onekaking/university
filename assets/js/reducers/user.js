const user = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case 'INIT_USER':
      return {
        id: action.user.id,
        name: action.user.name,
        url: action.user.url
      };  
    default:
      return state
  }
}

export default user
