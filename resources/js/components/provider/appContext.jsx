import React, {useEffect, useState} from 'react';
import {
    LOG_IN_FORM,
    LOGGED_IN,
    NOT_LOGGED_IN,
    SIGN_UP_FORM
} from "../authStatus";

export const AppContext = React.createContext();

export const AppProvider = (props) => {

    let hostName = 'http://otdushi-na-okna/';

    const [authStatus, setAuthStatus] = useState(NOT_LOGGED_IN);
    const [errosMessage, setErrorMessage] = useState('');
    const [userId, setUserId] = useState(0);
    const [userNameInput, setUserNameInput] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [user, setUser] = useState("false");
    const [authUser, setAuthUser] = useState();
    const [data, setData] = useState();
    const [product, setProduct] = useState();

    function changeAuthStatusLogin() {
        setAuthStatus(LOG_IN_FORM);
    }

    function changeAuthStatusSignUp() {
        setAuthStatus(SIGN_UP_FORM);
    }

    function changeMenuStatus() {
        setAuthStatus(NOT_LOGGED_IN);
    }

    function handleUserNameInput(changeEvent) {
        let updatedUserName = changeEvent.target.value;
        setUserNameInput(updatedUserName)
    }

    function handleUserEmail(changeEvent) {
        let updateUserEmail = changeEvent.target.value;
        setUserEmail(updateUserEmail)
    }

    function handleUsersPassword(changeEvent) {
        let updateUserPassword = changeEvent.target.value;
        setUserPassword(updateUserPassword);
    }

    useEffect(()=>{
        autoCheck()
    },[])


    const autoCheck = ()=>{
        axios.default.witchCredentials = true;
        axios.get(hostName + 'api/user').then((response)=>{
            // console.log(response)
            if(response.data!== undefined){
                setAuthStatus(LOGGED_IN)
                setAuthUser(response.data)
                // console.log(response.data.id)
            }
        })
    }

    const signup = () => {
        axios.default.witchCredentials = true;
        //CSRF COOKIE
        axios.get(hostName + "sanctum/csrf-cookie").then((response) => {
                // console.log(response)
                let data = {
                    name: userNameInput,
                    email: userEmail,
                    password: userPassword,
                };
                axios
                    .post(hostName + 'api/register', {...data})
                    .then((response) => {
                            // console.log(response);
                            //GET USER
                            axios.get(hostName + 'api/user').then((response) => {
                                    // console.log(response)
                                    setUserId(response.data.id);
                                    setData(response.data);
                                    setUser(response.data.name);
                                    setErrorMessage("");
                                    setAuthStatus(LOGGED_IN);
                                },
                                // GET USER ERROR
                                (error) => {
                                    setErrorMessage("Could not complete the sign up");
                                }
                            );
                        },
                        // SIGN ERROR
                        (error) => {
                            if (error.response.data.errors.name) {
                                setErrorMessage(error.response.data.errors.name[0]);
                            } else if (error.response.data.errors.email) {
                                setErrorMessage(error.response.data.errors.email[0])
                            } else if (error.response.data.errors.password) {
                                setErrorMessage(error.response.data.errors.password[0]);
                            } else if (error.response.data.message) {
                                setErrorMessage("Could not complete the sign up");
                            }
                        }
                    );
            },
            //COOKIE ERROR
            (error) => {
                setErrorMessage("Could not complete the sign up")
            }
        );
    }

    const login = () => {
        axios.default.witchCredentials = true;
        //    CSRF COOKIE
        axios
            .get(hostName + "sanctum/csrf-cookie").then((response) => {
                // console.log(response);
                // console.log("login");
                //  LOGIN
                let data = {
                    email: userEmail,
                    password: userPassword,
                }
                axios
                    .post(hostName + "api/login", {...data})
                    .then((response) => {
                            // console.log(response)
                            // console.log('Get')
                            // GET USER
                            axios
                                .get(hostName + "api/user")
                                .then((response) => {
                                        // console.log(response)
                                        setUserId(response.data.id);
                                        setData(response.data);
                                        setUser(response.data.name);
                                        setErrorMessage("");
                                        setAuthStatus(LOGGED_IN);

                                    },
                                    // GET USER ERROR
                                    (error) => {
                                        setErrorMessage("Could not complete the login");
                                    }
                                ).catch(e => {
                                console.log(e.response);
                            });
                        },
                        // LOGIN ERROR
                        (error) => {
                            if (error.response) {
                                setErrorMessage(error.response.data.message);
                            } else {
                                setErrorMessage("Ошибка входа");
                            }
                        }
                    );
            },
            // COOKIE ERROR
            (error) => {
                setErrorMessage("Не может войти")
            }
        );
    };

    function logout() {
        axios.default.witchCredentials = true;
        axios.get(hostName + "api/logout");
        setUserId(0);
        setUser('false');
        setUserNameInput("");
        setUserEmail("");
        setUserPassword("");
        setAuthStatus(NOT_LOGGED_IN);
    }

    return (
        <AppContext.Provider
            value={{
                authStatus,
                errosMessage,
                userId,
                userNameInput,
                userEmail,
                userPassword,
                user,
                data,
                changeAuthStatusLogin,
                changeAuthStatusSignUp,
                changeMenuStatus,
                handleUserNameInput,
                handleUserEmail,
                handleUsersPassword,
                signup,
                login,
                logout,
                authUser,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

// export default {AppContext, AppProvider};
