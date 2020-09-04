import React from "react";
export const appAction = (dispatch: any) => {
  return React.useMemo(
    () => ({
      signIn: async (data: any) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data: any) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );
};
export default React.createContext({});
