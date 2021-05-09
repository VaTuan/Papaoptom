import { AuthContext } from "contexts/auth/auth.context";
import { useReducer } from "react";

const INITIAL_STATE = {
  listSelected: [],
};

function reducer(state: any, action: any) {
  console.log("actions :", action);

  switch (action.type) {
    case "SELECT_ATTRIBUTE":
      break;

    default:
      return state;
  }
}

export const AttributeProvider: React.FunctionComponent = ({ children }) => {
  const [attributeState, attributeDispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );
  return (
    <AuthContext.Provider value={{ attributeState, attributeDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
