import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleLogin = async(event) => {
		// validate there is an email
		// validate there is a password
		const success = await actions.logIn({
			email: email,
			password: password
		});
		if (success) {
            navigate("/profile");
	    } else {
        alert("something went wrong");
        }
    }

	return (
		<div className="text-center mt-5">
			<form>
				<input 
				type="text" 
				placeholder="Email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}/>
				<input 
				type="text" 
				placeholder="Password"
				value={password}
				onChange={(event) => setPassword(event.target.value)}/>
				<button type="button" onClick={handleLogin}>submit</button>


			</form>
		</div>
	);
};
