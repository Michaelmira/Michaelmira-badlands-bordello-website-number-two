import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const CampQuestionnaire = () => {
	const { store, actions } = useContext(Context);

	return (
    
    <div class="container pt-4">
    	<form id="badlands-form">
          	<div class="card">
            <!-- Header -->
            	<div class="card-header">
              		<strong class="fs-4">Badlands Bordello Camper Application</strong>
            	</div>
            	<!-- Header -->
            	<!-- Danger Alert -->
            	<div class="container pt-4">
                	<div id="danger-alert" class="alert alert-danger" role="alert" style="display: none;">
                    	Some fields are missing
                	</div>
            	</div>
            	<!-- Danger Alert -->
            	<!-- Full Name, Phone, Email Inputs START -->
            	<div class="container">
                	<div class="row">
                    	<div class="col-5">
                        	<div class="card-text" ><strong>Full Name</strong></div>
                        	<div class="row">
                            	<div class="input-group mb-3">
                                	<input type="text" name="full-name" id="full-name" class="form-control" placeholder="First, Last." aria-label="Recipient's username" aria-describedby="basic-addon2">
                              	</div>
                        	</div>
                    	</div>
                    	<div class="col-3">
                        	<div class="cvc-text" ><strong> Phone Number </strong></div>
                        	<div class="row">
                            	<div class="input-group mb-3">
                                	<input type="text" name="phone" id="phone" class="form-control" placeholder="(000)000-0000" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            	</div>
                        	</div>
                    	</div>
                    	<div class="col-4">
                        	<div class="amount-text"><strong>Burner Account Email</strong></div>
                        	<div class="row">
                            	<div class="input-group mb-3">
                                	<input type="text" name="email-address" id="email-address" class="form-control" placeholder="Burner Email" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            	</div>
                        	</div>
                    	</div>
                	</div>
            	</div>
            	<!-- Full Name, Phone, Email Inputs END -->
            	<!-- Campers and Dwelling Inputs START -->
            	<div class="container">
                	<div class="row">
                    	<div class="col-6">
                        	<div class= "pb-2" ><strong>Names Of Campers In Your Dwelling</strong></div>
                        	<input type="text" class="form-control" name="campers" id="campers" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    	</div>
                    	<div class="col-6">
                        	<div class="pb-2"><strong>Space requirement for Dwelling, Cars, RV, Etc.</strong></div>
                        	<input type="text" class="form-control" name="space" id="space" aria-label="Recipient's username" placeholder="ex. 1 car 1 Truck 1 trailer 24ft Kodiak Tent 10by14ft " aria-describedby="basic-addon2">
                    	</div>
                	</div>
            	</div>
				<!-- Campers and Dwelling Inputs END -->
				<!-- Leader, Donation, Early arrival START -->
				<div class="container">
					<div class="row">
						<div class="col-6">
							<div class="pb-2 pt-2"><strong>Would you like to sign up as a leader in creating and decorating your own themed 12by12 Sideroom.</strong></div>
							<input type="text" class="form-control"  name="leader" id="leader" aria-label="Recipient's username" aria-describedby="basic-addon2">
						</div>
						<div class="col-3 pt-2">
							<label for="Camp Mandatory Donation" name="arrivalDonation" class="form-label" ><strong>Camp Manditory Donation Per/Human</strong></label>
								<select name="arrival-strike" id="arrivalDonation" class="form-select">
									<option selected>Pick a Option</option>
									<option value="value1">Early Arrival, Build, Strike 350$</option>
									<option value="value2">Early Arrival, Build, NO STRIKE 450$</option>
									<option value="value3">Strike ONLY 450$</option>
									<option value="value3">NO WORK 550$</option>
								</select>
                    	</div>
                    	<div class="col-3">
                        	<div class="pb-2 pt-2"><strong>Early Arrival? Yes/No + How Many </strong></div>
                        	<input type="text" name="early" id="early" class="form-control" placeholder="Yes 3 Friday Aug 23rd or No"  aria-label="Recipient's username" aria-describedby="basic-addon2">
                    	</div>
                	</div>
            	</div>
				<!-- Leader, Donation, Early arrival START -->
				<!--We accept: and Message:-->
				<div class="container pt-2 pb-3"> 
                	<div class="row">
                    	<div class="col-6">
                        	<div class="col-6">
								<p class="pt-2"> <strong>Mandatory Donations</strong> </p>
								<p> 2 Handles, 4 Chasers for Bar </p>
								<p> 5 Gallons water for Bar </p>
								<p> 2 Camp Shifts </p>
								<p> 2 Events Shifts </p>
                        	</div>
                        	<div class="col-6"></div>
                    	</div>
                    	<div class="col-6">
                        	<div class="col-md-auto">
								<p><strong>Why do you want to go to Burning Man?</strong>
								</p>
								<textarea name="why-do-you-want-to-go" id="why" class="comments form-control" rows="4"></textarea>
                        	</div>
                    	</div>
                	</div>
            	</div>
				<!--We accept: and Message:-->
				<!-- Footer  -->
            	<div class="container pb-2 bg-light border">
                	<div class="d-grid gap-2 d-md-flex justify-content-md-end pt-2">
						<button class="btn btn-success me-md-2" type="button">Cancel</button>
						<button class="btn btn-primary" type="submit">Submit</button>
                	</div>
            	</div>
          	</div>
        </form>      
    </div>
	);
};
