import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
     
	return (
		<div className="text-center mt-5">
			<h1>Hello im Michael!</h1>
		</div>
	);
};
