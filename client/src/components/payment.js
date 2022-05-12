import React,{useState} from "react";

import Massage from "./massage"
import CarShop from "./carShop"
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";



function Payment ({name,price,request,data}) {

    async function handleToken(token){
        const response = await axios.post(
            "https://ry7v05l6on.sse.codesandbox.io/checkout",
            { token }
          );
          const { status } = response.data;
          console.log("Response:", response.data);
          if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
          } else {
            toast("Something went wrong", { type: "error" });
          }
    }
    

    return (
    
    <div className="sidePanel">
 
     <div> 

    <h3>{name} cost= ${price}</h3>
        <h5> + 5% tax </h5>
        <h2>Finaly amount = $ {price*1.05} </h2>
    </div>

        
     <div className="checkout"  onClick={data} >
         

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

export default Payment