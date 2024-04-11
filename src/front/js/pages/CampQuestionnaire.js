import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const CampQuestionnaire = () => {
	const { store, actions } = useContext(Context);

	return (
    
		<div className="container bg-dark pt-4">
			<form id="badlands-form ">
				<div className="card text-dark border-0 " style={{ color: "#000000", backgroundColor: "#575757" }} >
				{/* <!-- Header --> */}
					<div className="card-header" style={{ height: "70px", backgroundColor: "#000000", backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} >
						<h1 className="fs-4" style={{ color: "#828282" }} ><strong>Badlands Bordello Camper Application</strong></h1>
					</div>
					{/* <!-- Header -->
					<!-- Danger Alert --> */}
					<div className="container pt-4 ">
						<div id="danger-alert" className="alert alert-danger" role="alert" style={ {display: "none" }}>
							Some fields are missing
						</div>
					</div>
					{/* <!-- Danger Alert -->
					<!-- Full Name, Phone, Email Inputs START --> */}
					<div className="container">
						<div className="row">
							<div className="col-5">
								<div className="card-text text-black " ><strong>Full Name</strong></div>
								<div className="row">
									<div className="input-group mb-3">
										<input type="text" name="full-name" style={{backgroundColor: "#000000"}} id="full-name" className="form-control text-light border-0" placeholder="First, Last." aria-label="Recipient's username" aria-describedby="basic-addon2" />
									</div>
								</div>
							</div>
							<div className="col-3">
								<div className="text-black " ><strong> Phone Number </strong></div>
								<div className="row">
									<div className="input-group mb-3">
										<input type="text" name="phone" id="phone" style={{backgroundColor: "#000000"}} className="form-control border-0 text-light  " placeholder="(000)000-0000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
									</div>
								</div>
							</div>
							<div className="col-4">
								<div className="text-black"><strong>Burner Account Email</strong></div>
								<div className="row">
									<div className="input-group mb-3">
										<input type="text" name="email-address" id="email-address" className="form-control border-0 text-light " style={{backgroundColor: "#000000"}} placeholder="Burner Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Full Name, Phone, Email Inputs END -->
					<!-- Campers and Dwelling Inputs START --> */}
					<div className="container">
						<div className="row">
							<div className="col-6">
								<div className= "pb-2 text-black" ><strong>Names Of Campers In Your Dwelling</strong></div>
								<input type="text" className="form-control border-0 text-light " style={{backgroundColor: "#000000"}} name="campers" id="campers" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
							</div>
							<div className="col-6">
								<div className="pb-2 text-black"><strong>Space requirement for Dwelling, Cars, RV, Etc.</strong></div>
								<input type="text" className="form-control border-0 text-light " style={{backgroundColor: "#000000"}} name="space" id="space" aria-label="Recipient's username" placeholder="ex. 1 car 1 Truck 1 trailer 24ft Kodiak Tent 10by14ft " aria-describedby="basic-addon2"/>
							</div>
						</div>
					</div>
					{/* <!-- Campers and Dwelling Inputs END -->
					<!-- Leader, Donation, Early arrival START --> */}
					<div className="container">
						<div className="row">
							<div className="col-6">
								<div className="pb-2 pt-2 text-black "><strong>Would you like to sign up as a leader? Or create and decorate your own themed 10" by 8" or 10" by 20" Sideroom connected to main venue.</strong></div>
								<input type="text" className="form-control border-0 text-light " style={{backgroundColor: "#000000"}}  name="leader" id="leader" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
							</div>
							<div className="col-3 pt-2">
								<label for="Camp Mandatory Donation" name="arrivalDonation" className="form-label border-0 text-black " ><strong>Camp Manditory Donation Per/Human</strong></label>
									<select name="arrival-strike" id="arrivalDonation" className="form-select border-0 "style={{color: "#575757", backgroundColor: "#000000"}}>
										<option  selected>Pick a Option</option>
										<option value="value1">Early Arrival, Build, Strike 350$</option>
										<option value="value2">Early Arrival, Build, NO STRIKE 450$</option>
										<option value="value3">Strike ONLY 450$</option>
										<option value="value3">NO WORK 550$</option>
									</select>
							</div>
							<div className="col-3">
								<div className="pb-2 pt-2 text-black"><strong>Early Arrival? Yes/No + How Many </strong></div>
								<input type="text" name="early" id="early" className="form-control border-0 text-light " style={{backgroundColor: "#000000"}} placeholder="Yes 3 Friday Aug 23rd or No"  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
							</div>
						</div>
					</div>
					{/* <!-- Leader, Donation, Early arrival START -->
					<!--We accept: and Message:--> */}
					<div className="container pt-2 pb-3"> 
						<div className="row">
							<div className="col-6">
								<div className="col-6">
									<p className="pt-2 text-black "> <strong>Mandatory Donations</strong> </p>
									<p className=" text-black "> 2 Handles, 4 Chasers for Bar </p>
									<p className=" text-black " > 5 Gallons water for Bar </p>
									<p className=" text-black " > 2 Camp Shifts </p>
									<p className=" text-black "> 2 Events Shifts </p>
								</div>
								<div className="col-6"></div>
							</div>
							<div className="col-6">
								<div className="col-md-auto">
									<p><strong className=" text-black ">Why do you want to go to Burning Man?</strong>
									</p>
									<textarea name="why-do-you-want-to-go" id="why" className="comments form-control border-0 text-light " style={{backgroundColor: "#000000"}} rows="4"></textarea>
								</div>
							</div>
						</div>
					</div>
					{/* <!--We accept: and Message:-->
					<!-- Footer  --> */}
					<div className="container pb-2 border-0" style={{ height: "70px", backgroundColor: "#000000", backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}>
						<div className="d-grid gap-2 d-md-flex justify-content-md-end pt-2">
							<button style={{ backgroundColor: "#575757" }} className="btn text-black mt-2 mr-2 me-md-2" type="button">Cancel</button>
							<button style={{ backgroundColor: "#575757" }} className="btn text-black mt-2 mr-2 " type="submit">Submit</button>
						</div>
					</div>
				</div>
			</form>      
		</div>
	);
};
