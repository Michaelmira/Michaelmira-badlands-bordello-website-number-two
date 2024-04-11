import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center" style={{ height: "70px", backgroundColor: "#000000", backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}>
		<p style={{textDecoration: 'none', color: "#828282" }}>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a style={{textDecoration: 'none', color: "#828282" }}  href="http://www.4geeksacademy.com">Michael Mirisciotta</a>
		</p>
	</footer>
);
