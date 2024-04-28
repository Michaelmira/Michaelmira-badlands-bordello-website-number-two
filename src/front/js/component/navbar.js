import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} =useContext(Context);
	return (
		<nav className="navbar navbar-light" style={{ height: "70px", backgroundColor: "#000000", backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} >
			<div className="container">
				<Link to="/" style={{ textDecoration: 'none', textDecorationColor: 'black' }} >
					<h1 className="navbar-brand mb-0" style={{textDecoration: 'none', color: "#828282" }} ><strong>Badlands Bordello</strong></h1>
				</Link>
				<div className="ml-auto">
					<Link to="/donate">
						<button className="btn border-0 mx-3 text-black" style={{ backgroundColor: "#575757" }} >Donate</button>
					</Link>
					{store.token ? (
                        <button onClick={(e) => actions.logUserOut()} style={{ backgroundColor: "#575757" }} >
                            Log out
                        </button>
                    ) : (
                        <Link to="/log-in">
                            <button className="btn border-0 text-black" style={{ backgroundColor: "#575757" }} >Log in</button>
                        </Link>
                    )}
				</div>
			</div>
		</nav>
	);
};
