import React, { useState } from "react";
import { PayPal } from "../component/PayPal";

export const Donate = () => {
    const [checkout, setCheckOut] = useState(false);
    const [donationAmount, setDonationAmount] = useState("");

    return (
		<>
        {/* comment112333 */}
            <div className="container py-5 ">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.2)' }}>
                            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Please Enter Your Donation Amount</h2>
                            <div style={{ marginBottom: '20px' }}>
                                <input
                                    type="email"
                                    style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
                                    placeholder="Amount"
                                    onChange={(e) => setDonationAmount(e.target.value)} 
                                />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                {checkout ? (
                                    <PayPal
                                    donationAmount = {donationAmount} />
                                ) : (
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
                                        onClick={() => {
                                            setCheckOut(true);
                                        } }
                                    >
                                        Checkout
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
	);
}