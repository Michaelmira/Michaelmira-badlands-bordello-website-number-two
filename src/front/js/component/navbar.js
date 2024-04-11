import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} =useContext(Context);
	return (
		<nav className="navbar navbar-light" style={{ height: "70px", backgroundColor: "#000000", backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} >
			<div className="container">
				<Link to="/" style={{ textDecoration: 'underline', textDecorationColor: 'black' }} >
					<span className="navbar-brand pt-5" style={{textDecoration: 'none', color: "#828282" }} ><h2><strong>Badlands Bordello</strong></h2></span>
				</Link>
				<div className="ml-auto">
					{store.token ? (
                        <button onClick={(e) => actions.logUserOut()} style={{ backgroundColor: "#dc3545", borderColor: "#dc3545", color: "white", marginRight: "10px", cursor: "pointer" }} >
                            Log out
                        </button>
                    ) : (
                        <Link to="/log-in">
                            <button className="btn border-0" style={{ backgroundColor: "#000000", color: "#828282", cursor: "pointer" }} >Log in</button>
                        </Link>
                    )}
				</div>
			</div>
		</nav>
	);
};
