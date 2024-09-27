import { createContext, useContext, useReducer } from "react";
import { CountReducer } from "../reducers/CountReducer";

const initialCount = {
  count: 0,
};

export const CountContext = createContext(initialCount);

export const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CountReducer, initialCount);

  //   const addOne = () => {
  //     dispatch({
  //       type: "ADD_ONE",
  //       payload: {
  //         count: state.count + 1,
  //       },
  //     });
  //   };

  const value = {
    count: state.count,
    // addOne,
    state,
    dispatch,
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
