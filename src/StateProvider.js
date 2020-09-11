// CREATING A HOOK
import React, { createContext, useContext, useReducer } from "react";

// Prepares the DataLayer
export const StateContext = createContext();

// Wrap the app and provide the DataLayer
export const StateProvider = ({ reducer, initialState, children })=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
       {children}
    </StateContext.Provider>  
);

// Pull information form the DataLayer
export const useStateValue = ()=>useContext(StateContext)