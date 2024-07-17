import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const { actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (event) => {
        // validate there is an email
        // validate there is a password
        const success = await actions.logIn({
            email: email,
            password: password
        });
        if (success) {
            navigate("/user-dashboard");
        } else {
            alert("something went wrong");
        }
    }


    return (
        <div className="container  pt-5 ">
            {/* Apply animation classes based on formVisible state */}
            <div className="row justify-content-center animate__animated">
                <div className="card col-md-6 pb-5 px-0 mb-5 border-dark border-2 shadow-lg" >
                    <div className="card-header" style={{ height: "70px", backgroundColor: "#000000", backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} >
                        <h1 className="fs-4 m text-light"  ><strong>Login</strong></h1>
                    </div>
                    <div >
                        <div className="px-5 pt-4">
                            <input
                                type="email"
                                className="border-dark rounded-3 border-2 shadow-sm"
                                style={{ width: '100%', padding: '10px' }}
                                placeholder="Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="px-5 py-4 ">
                            <input
                                type="password"
                                className="border-dark rounded-3 border-2 shadow-sm"
                                style={{ width: '100%', padding: '10px'}}
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button
                                type="button"
                                style={{
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    padding: '10px 20px',
                                    cursor: 'pointer',
                                    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
                                    transition: 'box-shadow 0.3s ease',
                                    outline: 'none',
                                }}
                                onClick={handleLogin}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}