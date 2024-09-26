export const TestReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TEST":
      return {
        ...state,
        tests: payload.test,
      };

    default:
      return state;
  }
};
