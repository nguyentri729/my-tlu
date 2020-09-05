import React from "react";
export const appAction = (dispatch: any) => {
  return React.useMemo(
    () => ({
      signIn: () => {
        dispatch({ type: "SIGN_IN" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      
    }),
    []
  );
};
export default React.createContext({});
