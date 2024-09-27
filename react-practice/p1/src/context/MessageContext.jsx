import { createContext, useContext, useReducer } from "react";
import { MessageReducer } from "../reducer/MessageReducer";

const messageInitialState = {
  message: "",
};

const MessageContext = createContext(messageInitialState);

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MessageReducer, messageInitialState);

  function updateMessage(data) {
    dispatch({
      type: "POST_MESSAGE",
      payload: {
        newMessage: data,
      },
    });
  }

  const value = {
    message: JSON.stringify(state.message, null, 2),
    updateMessage,
  };
  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
