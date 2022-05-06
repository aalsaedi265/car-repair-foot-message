import React,{useState} from "react";

import Massage from "./massage"
import CarShop from "./carShop"
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";
// import { toast } from "react-toastify";



function payment ({name,cost,request}) {

// send down through local storage such as car/payment etc...
// grab data from back end and using a fetch to the data base.

    // toast.configure();

    async function handleToken(token){

    }
    return (
    
    <div className="container">
    
    {/* <div> */}

        
        {/* <h3>Service cost= ${cost}</h3>
        <h5> + 5% tax </h5>
        <h2>Finaly amount = $ </h2>
    </div>

     <div className="checkout">
        <StripeCheckout
            stripeKey="pk_test_51Kvjm1HCgzaQFbfzoUgaLr5FsZprhxZkLsYQz2kUA6uH7vlh52w9jQ2dNtNkYckr9GosRP1s1phxD8xnmKeIc6P500AeyfVKX9"
                token={handleToken}
                amount={cost*100}
                name={name}

        />
     </div>

     <h3>Zero charges pending, no money is due</h3>

     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgnbcg6Ekr3lJ6ApYrS3pSkISg-SMNkYPyqw&usqp=CAU" alt="happy" /> */}
            </div>
    
    )
}

export default payment