import { TestReducer } from "@/reducers/TestReducer";
import { createContext, useContext, useReducer } from "react";

const initialTest = {
  tests: [],
};

const TestContext = createContext(initialTest);

export const TestContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TestReducer, initialTest);

  const addTest = (test) => {
    dispatch({
      type: "ADD_TEST",
      payload: {
        test,
      },
    });
  };

  const value = {
    tests: state.tests,
    addTest,
  };

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};

export const getTests = () => useContext(TestContext);
