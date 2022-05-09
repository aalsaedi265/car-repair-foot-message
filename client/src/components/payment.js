import React,{useState} from "react";

import Massage from "./massage"
import CarShop from "./carShop"
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";
// import { toast } from "react-toastify";



function payment ({name,price,request}) {

// send down through local storage such as car/payment etc...
// grab data from back end and using a fetch to the data base.

    // toast.configure();

    async function handleToken(token){

    }
    return (
    
    <div className="sidePanel">
    
     <div> 

    <h3>Service cost= ${price}</h3>
        <h5> + 5% tax </h5>
        <h2>Finaly amount = $ {price*1.05} </h2>
    </div>

     <div className="checkout">
        <StripeCheckout
            stripeKey="pk_test_51Kvjm1HCgzaQFbfzoUgaLr5FsZprhxZkLsYQz2kUA6uH7vlh52w9jQ2dNtNkYckr9GosRP1s1phxD8xnmKeIc6P500AeyfVKX9"
                token={handleToken}
                amount={(price*100)*1.05}
                name={name}

        />
     </div>
            </div>
    
    )
}

export default payment