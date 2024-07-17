import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

import { Gallery } from "../component/Gallery";

export const Home = () => (
	<>
		<div className="container-flex   p-0" >
			<ul className="nav nav-tabs d-flex border-0 justify-content-center" id="myTab" role="tablist">
				<li className="nav-item shadow-sm text-black" role="presentation">
					<button className="nav-link shadow-sm text-black active" id="question-tab" data-bs-toggle="tab" data-bs-target="#question" type="button" role="tab" aria-controls="question" aria-selected="true">Home</button>
				</li>
				<li className="nav-item shadow-sm text-black" role="presentation">
					<button className="nav-link text-black shadow-sm" id="gallery-tab" data-bs-toggle="tab" data-bs-target="#gallery" type="button" role="tab" aria-controls="gallery" aria-selected="false">Gallery</button>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				{/* <!-- Camper Questionnaire-Start -->
    			// <!-- Card Start --> */}
				<div className="tab-pane fade show active mt-1" id="question" role="tabpanel" aria-labelledby="question">


					<>
						<div className="container-fluid landing d-flex align-items-center justify-content-center"  >
							<div className="container-fluid w-100 h-100"  >
								<div className="container-fluid d-flex align-items-center justify-content-center">
									<img className="img-fluid" alt="GroupPhoto2022" src="https://i.ibb.co/kxcpbHv/0group-Photo2023.jpg" />
								</div>
							</div>
						</div>
						<div className="container text-center d-flex justify-content-center">
							<div className="card mb-3 border border-0" >
								<div className="row">
									<div className="col-md-12 text-black "  >
										<div className="card-body justify-content-center" style={{ width: '100%', justifyContent: 'center' }}>
											<h5 className="card-title">Badlands Bordello 2024 + WAVELINK ART CAR</h5>
											<p className="card-text"> Chill and open-minded camp that embraces adventure and welcomes anyone who wants to join in on the fun. Our members are a diverse group who share a love for new experiences and a laid-back approach to life. Whether we’re hanging out, enjoying a drink or two, or exploring the playa, we always prioritize having a good time and making meaningful connections. This year 2024 we will be hosting a Full-Bar, Djs, Events, and an Absynthe bar.<br /><br />
												Our Full bar is open Monday - Friday 1 PM - 4 PM <br />
												We are open for Special Events Tuesday, Wednesday, Thursday 6 PM - 9 PM<br />
											</p>
											<p className="card-text"><small className="text-body-secondary">Pre-Build August 23th Friday - Satuday - Sunday - Monday August 26th <br />
												Strike Saturday Aug 31 - Sunday Sep 1st </small></p>
											<p className="card-text"><small className="text-body-secondary">We will be supplying a brand new Shower 2024, grey water removal, and a charging station  </small></p>
										</div>
										<Link to="/camp-questionnaire">
											<button
												className="btn btn border rounded-3 shadow-lg"
												style={{
													transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition for hover effects
													boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Initial box shadow
												}}
												onMouseOver={(e) => {
													e.target.style.transform = 'scale(1.05)'; // Scale up on hover
													e.target.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.3)'; // Larger shadow on hover
												}}
												onMouseOut={(e) => {
													e.target.style.transform = 'scale(1)'; // Reset scale on mouse out
													e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Reset shadow on mouse out
												}}
											>
												Click here! <br />
												Submit an application <br />
												To Join <br />
												the Badlands Bordello / Wavelink Art Car Family!
											</button>
										</Link>
									</div>

								</div>
							</div>
						</div>
					</>



				</div>
				<div className="tab-pane fade" id="gallery" role="tabpanel" aria-labelledby="gallery">
					<div className="container-fluid" style={{ maxWidth: '1600px' }} >
						<Gallery />
					</div >
				</div>
				{/* <!-- Gallery-End --> */}
			</div>
		</div>


	</>
);
