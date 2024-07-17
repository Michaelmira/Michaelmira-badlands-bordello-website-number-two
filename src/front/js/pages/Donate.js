import React, { useState } from "react";
import { PayPal } from "../component/PayPal";

export const Donate = () => {
    const [checkout, setCheckOut] = useState(false);
    const [donationAmount, setDonationAmount] = useState("");

    return (
        <>
            {/* comment112333 */}
            <div className="container py-5  ">
                <div className="row justify-content-center">

                    <div className="card col-md-6 border-dark border-2 shadow-lg p-0 ">
                        <div className="card-header" style={{ height: "70px", backgroundColor: "#000000", backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} >
                            <h1 className="fs-4 text-light"  ><strong>Please Enter Your Donation Amount</strong></h1>
                        </div>
                        <div className="" style={{ padding: '20px' }}>

                            <div style={{ marginBottom: '20px' }}>
                                <input
                                    type="email"
                                    className="border-dark border-2"
                                    style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
                                    placeholder="Amount"
                                    onChange={(e) => setDonationAmount(e.target.value)}
                                />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                {checkout ? (
                                    <PayPal
                                        donationAmount={donationAmount} />
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
                                        }}
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