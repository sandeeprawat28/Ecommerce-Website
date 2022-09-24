import React, { useEffect, useState } from 'react'
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from './axios';
import { db } from './firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe which allows us to charge a customer
        const getClientSecret = async () => {
            const res = await axios ({
                method: 'post',
                //stripe expects the total in a currencies subuntis
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`        //for rupee 1000
            })
            setClientSecret(res.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit =  async(event) => {
        //do all the fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(( {paymentIntent} ) => {
            //payment intent = payment confirmation
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set ({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch ({
                type: 'EMPTY_BASKET' 
            })

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        //Listen for changes in the CardElements
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items </Link>
                )
                </h1>
                {/* payment section - delivery address */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p> 
                        <p>128 South Magnolia Lane</p>
                        <p>Pompano Beach, FL 33060</p>                   
                    </div>
                </div>

                {/* payment section - Review Items */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                    ))}                 
                    </div>
                </div>

                {/* payment section - Payment Method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>  
                    <div className="payment__details">
                        {/* Stripe magic */ }
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat renderText={ (value) => (
                                    <>
                                       <h3 className="">Order total : {value}</h3>
                                    </>
                                )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />
                                    <button id="btn_" disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                                    </button>
                            </div>
                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>                      
                </div>
            </div>
        </div>
    )
}

export default Payment
