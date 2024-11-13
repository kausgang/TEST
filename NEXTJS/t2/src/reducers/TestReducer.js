export const TestReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TEST":
      return {
        ...state,
        tests: payload.test,
      };
    case "REMOVE_TEST":
      return {
        ...state,
        tests: state.tests.filter((item) => item !== payload.test),
      };

    default:
      return state;
  }
};
