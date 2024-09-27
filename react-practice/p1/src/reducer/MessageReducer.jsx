export const MessageReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "POST_MESSAGE":
      return {
        ...state,
        message: payload.newMessage,
      };
    default:
      throw new Error("no case found");
  }
};
