// import React, { useContext, useReducer } from "react";

// const AuthContext = React.createContext();
// const initialState = {
//     auth: true,
//     username: 'agustin@hm.com',
//     password: '000000', 
// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'LOG_IN': return {
//             ...state,
//             auth: action.payload,
//         }
//         case 'LOG_OUT': return {
//             ...state,
//             auth: action.payload,
//         }
//         default:
//             return state
//     }
// }

// export const useAuthContex = () => {
//     return useContext(AuthContext);
// }

// export const AppProvider = ({ children }) => {
//     // const [ auth, setAuth ] = useState(localStorage.getItem('login') ? true : false);
//     const [ state, dispatch ] = useReducer(reducer, initialState);

//     return(
//         <AuthContext.Provider value={{ auth: state.auth, username: state.username, password: state.password, dispatch }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }