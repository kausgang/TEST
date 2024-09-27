export const CountReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ONE":
      return {
        ...state,
        count: payload.count,
      };
    default:
      throw new Error("no case found");
  }
};
