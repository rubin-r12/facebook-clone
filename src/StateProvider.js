import React, { createContext, useContext, useReducer } from "react"; //import Context Api stuff

export const StateContext = createContext(); //prepare the data layer

//higher order component to wrap the app inside the StateProvider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//useStateValue hook to pull the data from the data layer
export const useStateValue = () => useContext(StateContext);
