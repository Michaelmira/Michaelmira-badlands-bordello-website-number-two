import React, { useEffect, useRef } from "react";



export const PayPal = ( {donationAmount} ) => {
    const paypal = useRef()

    useEffect(() => {
        window.paypal
            .Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Donate to the Badlands Bordello",
                            amount: {
                                currency_code: "USD",
                                value: donationAmount,
                            },
                        },
                    ],
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            },

        })
        .render(paypal.current)
    }, []);


    return (
		<div>
            <div ref={paypal}></div>
            
        </div>
	);
}