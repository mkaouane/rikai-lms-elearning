import { useReducer, createContext, useEffect } from "react";
import axios from "axios"
import { useRouter } from "next/router";

// initial state
const intialState = {
  user: null,
};

// create context
const Context = createContext();

// root reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};



// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, intialState);


  // router
const router = useRouter();

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem('user'))
    })
    return () => {
      
    }
  }, [])


  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let res = error.response;
    if(res.status === 401 && res.config && !res.config._isRetryRequest) {
      return Promise((resolve, reject) => {
        axios.get('/api/logout')
        .then((data) => {
          console.log('401 error > logout');
          dispatch({
            type: 'LOGOUT'
          })
          window.localStorage.removeItem('user')
          router.push('/login')
        })
        .catch(err => {
          console.log('AXIOS INTERCEPTORS ERROR', err);
          reject(error)
        })
      });
    }
    return Promise.reject(error);
  });

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
