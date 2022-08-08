import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
   const [user, setUser] = useState({});
   const [initialized, setInitialized] = useState(false);
   const [isProccessing, setIsProccessing] = useState(false);
   const [errors, setErrors] = useState([]);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [formLogin, setFormLogin] = useState({
     email: "",
     password: "",
   }) 

   const [formRegister, setFormRegister] = useState({
      email: "",
      username: "",
      first_name: "",
      last_name: "",
      password: "",
      passwordConfirm: ""
    })

   useEffect(() => {
      const fetchUser = async () => {
        const { data } = await apiClient.fetchUserFromToken();
        if (data) {
          setUser(data.user);
        }
      }
      const token = localStorage.getItem("lifetracker_token");
      if (token) {
        apiClient.setToken(token);
        fetchUser();
      }
    }, [setUser]);

    const handleLogout = async () => {
      await apiClient.logoutUser();
      setUser({});
      setIsLoggedIn(false);
    }

    const handleLogin = async () => {
      setInitialized(false);
      setIsProccessing(true);
      setErrors((err) => ({ ...err, formLogin: null }))   
      const { data, err} = await apiClient.loginUser({ email: formLogin.email, password: formLogin.password })
      if (data) {
        setUser(data.user);
        setIsLoggedIn(true);
        apiClient.setToken(data.token);
        setFormLogin("", "");
      }
      if (err) {
        setErrors((e) => ({ ...e, formLogin: err}))
      }
      setIsProccessing(false);
      setInitialized(true);
    }

    const handleRegister = async () => {
      setInitialized(false);
      setIsProccessing(true);
      setErrors((err) => ({ ...err, formRegister: null }))   
      const { data, err } = await apiClient.signupUser({ 
        email: formRegister.email, username: formRegister.username, first_name: formRegister.first_name,
        last_name: formRegister.last_name, password: formRegister.password, confirmpassword: formRegister.passwordConfirm 
      });
      if (data) {
        setUser(data.user);
        setIsLoggedIn(true);
        apiClient.setToken(data.token);
        setFormRegister("", "");
      }
      if (err) {
        setErrors((e) => ({ ...e, form: err }))
      }
      setIsProccessing(false);
      setInitialized(true);
     }

    const authValue = {
      user, setUser,
      formLogin, setFormLogin,
      handleLogin, handleRegister, handleLogout,
      formRegister, setFormRegister,
      initialized, setInitialized,
      isProccessing, setIsProccessing,
      errors, setErrors,
      isLoggedIn, setIsLoggedIn
   };

   return (
      <AuthContext.Provider value={authValue}>
         <>{children}</>
      </AuthContext.Provider>
   )
}

export const useAuthContext = () => useContext(AuthContext);