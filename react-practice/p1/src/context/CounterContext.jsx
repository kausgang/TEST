import { createContext, useContext, useReducer } from "react";
import { CountReducer } from "../reducer";

const countInitialState = {
  count: 0,
};

const CountContext = createContext(countInitialState);

export const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CountReducer, countInitialState);

  //   function addOne(data) {
  //     console.log(data);
  //     dispatch({
  //       type: "ADD_ONE",
  //       payload: {
  //         count: data + 1,
  //       },
  //     });
  //   }

  const addOne = () => {
    dispatch({
      type: "ADD_ONE",
      payload: {
        count: state.count + 1,
      },
    });
  };
  const value = {
    count: state.count,
    addOne,
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
