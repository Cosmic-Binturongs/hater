const userReducer = (state = { name: "Guest" }, action) => {
  switch (action.type) {
    case "set":
      return {
        name: action.payload.name,
        tag: action.payload.tag,
        id: action.payload.id,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default userReducer;
