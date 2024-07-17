import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const CampQuestionnaire = () => {
	const { store, actions } = useContext(Context);
	const [ full_name, setFull_name ] = useState("");
	const [ phone_number, setPhone_number ] = useState("");
	const [ burner_email, setBurner_email ] = useState("");
	const [ campers, setCampers ] = useState("");
	const [ space_required, setSpace_required ] = useState("");
	const [ leader_question, setLeader_question ] = useState("");
	const [ camp_donation, setCamp_donation ] = useState("");
	const [ early_arrival, setEarly_arrival ] = useState("");
	const [ why_go, setWhy_go ] = useState("");

	const handleProcessQuestionnaire = async (event) => {
        const success = await actions.processQuestionnaire({
            full_name: full_name,
            phone_number: phone_number,
            burner_email: burner_email,
            campers: campers,
            space_required: space_required,
            leader_question: leader_question,
            camp_donation: camp_donation,
            early_arrival: early_arrival,
            why_go: why_go
        }); 
        if (success) {
			alert("You did it! Thank you for applying to camp at the Badlands Bordello!");
        } else {
            alert("something went wrong");
        }
	}

	return (
    
		<div className="container py-5">
			<form >
				<div className="card border-2 shadow-lg "  >
				{/* <!-- Header --> */}
					<div className="card-header" style={{ height: "70px", backgroundColor: "#000000", backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} >
						<h1 className="fs-4 text-light"  ><strong>Badlands Bordello Camper Application</strong></h1>
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
							<div className="col-md-5">
								<div className="card-text  " ><strong>Full Name</strong></div>
								<div className="row">
									<div className="input-group mb-3">
										<input 
											type="full_name"
											 
											className="form-control border-dark border-2 " 
											placeholder="First, Last." 
											value={full_name}
											onChange={(event) => setFull_name(event.target.value)}
										/>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6">
								<div className="text-black " ><strong> Phone Number </strong></div>
								<div className="row">
									<div className="input-group mb-3 ">
										<input 
											type="text" 
											name="phone" 
											id="phone" 
											 
											className="form-control border-dark border-2" 
											placeholder="(000)000-0000" 
											aria-label="Recipient's username" 
											aria-describedby="basic-addon2" 
											value={phone_number}
											onChange={(event) => setPhone_number(event.target.value)}
										/>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6">
								<div className="text-black"><strong>Burner Account Email</strong></div>
								<div className="row">
									<div className="input-group mb-3">
										<input 
										type="text" 
										name="email-address" 
										id="email-address" 
										className="form-control border-dark border-2 " 
										 
										placeholder="Burner Email" 
										aria-label="Recipient's username" 
										aria-describedby="basic-addon2" 
										value={burner_email}
										onChange={(event) => setBurner_email(event.target.value)}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Full Name, Phone, Email Inputs END -->
					<!-- Campers and Dwelling Inputs START --> */}
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className= "pb-2 " ><strong>Names Of Campers In Your Dwelling</strong></div>
								<input 
									type="text" 
									className="form-control border-dark border-2  " 
									 
									name="campers" 
									id="campers" 
									aria-label="Recipient's username" 
									aria-describedby="basic-addon2"
									value={campers}
									onChange={(event) => setCampers(event.target.value)}
								/>
							</div>
							<div className="col-md-6">
								<div className="pb-2 text-black"><strong>Space requirement for Dwelling, Cars, RV, Etc.</strong></div>
								<input 
									type="text" 
									className="form-control border-dark border-2  " 
									 
									name="space" 
									id="space" 
									aria-label="Recipient's username" 
									placeholder="ex. 1 car 1 Truck 1 trailer 24ft Kodiak Tent 10by14ft " 
									aria-describedby="basic-addon2"
									value={space_required}
									onChange={(event) => setSpace_required(event.target.value)}
								/>
							</div>
						</div>
					</div>
					{/* <!-- Campers and Dwelling Inputs END -->
					<!-- Leader, Donation, Early arrival START --> */}
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="pb-2 pt-2 "><strong>Would you like to sign up as a leader? Or create and decorate your own themed 10" by 8" or 10" by 20" Sideroom connected to main venue.</strong></div>
								<input 
									type="text" 
									className="form-control border-dark border-2  " 
									  
									name="leader" 
									id="leader" 
									aria-label="Recipient's username" 
									aria-describedby="basic-addon2"
									value={leader_question}
									onChange={(event) => setLeader_question(event.target.value)}
								/>
							</div>
							<div className="col-md-3 col-sm-6  pt-2">
								<label for="Camp Mandatory Donation" name="arrivalDonation" className="form-label  " ><strong>Camp Manditory Donation Per/Human</strong></label>
									<select 
										name="arrival-strike" 
										id="arrivalDonation" 
										className="form-select border-dark border-2"
										value={camp_donation}
										onChange={(event) => setCamp_donation(event.target.value)}
									>
										<option  selected>Pick a Option</option>
										<option value="value1">250$</option>
										<option value="value2">250$</option>
										<option value="value3">250$</option>
										<option value="value3">250$</option>
									</select>
							</div>
							<div className="col-md-3 col-sm-6 ">
								<div className="pb-2 pt-2 text-black"><strong>Early Arrival? Yes/No + How Many </strong></div>
								<input 
									type="text" 
									name="early" 
									id="early" 
									className="form-control border-dark border-2  " 
									 
									placeholder="Yes 3 Friday Aug 23rd or No"  
									aria-label="Recipient's username" 
									aria-describedby="basic-addon2"
									value={early_arrival}
									onChange={(event) => setEarly_arrival(event.target.value)}
								/>
							</div>
						</div>
					</div>
					{/* <!-- Leader, Donation, Early arrival START -->
					<!--We accept: and Message:--> */}
					<div className="container pt-2 pb-3 "> 
						<div className="row">
							<div className="col-md-6">
								<div className="col-6 ">
									<p className="pt-2 text-black "> <strong>Mandatory Donations</strong> </p>
									<p className=" text-black "> 2 Handles, 4 Chasers for Bar </p>
									<p className=" text-black " > 5 Gallons water for Bar </p>
									<p className=" text-black " > 2 Camp Shifts </p>
									<p className=" text-black "> 2 Events Shifts </p>
								</div>
								<div className="col-6"></div>
							</div>
							<div className="col-md-6">
								<div className="col-md-auto">
									<p><strong className=" text-black ">Why do you want to go to Burning Man?</strong>
									</p>
									<textarea 
									name="why-do-you-want-to-go" 
									id="why" 
									className="comments form-control border-dark border-2  " 
									 
									rows="4"
									value={why_go}
									onChange={(event) => setWhy_go(event.target.value)}
									>
									
									</textarea>
								</div>
							</div>
						</div>
					</div>
					{/* <!--We accept: and Message:-->
					<!-- Footer  --> */}
					<div className="container pb-2 border-0" style={{ height: "70px", backgroundColor: "#000000", backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}>
						<div className="d-grid gap-2 d-md-flex justify-content-md-end pt-2">
							<button  className="btn btn-light  border-dark border-2  mt-2 mr-2 me-md-2" type="button">Cancel</button>
							<button 
							 
							className="btn btn-light mt-2 mr-2 " 
							type="button"
							onClick={handleProcessQuestionnaire}
							>Submit</button>
						</div>
					</div>
				</div>
			</form>      
		</div>
	);
};
