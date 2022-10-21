import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://static.vecteezy.com/system/resources/thumbnails/003/240/364/small/shopping-online-on-phone-paper-art-modern-pink-background-gifts-box-free-vector.jpg" alt=""/>
                {basket?.length === 0 ? (
                    <div className="empty">
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have no items in Your Basket. To buy one or more
                            "Add to Basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h3 className="checkout__user">Hello,  {user?.email}</h3>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {/* List out all of the Checkout Products */}
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
                )}
            </div>
          {basket.length > 0 && (
              <div className="checkout__right">
                  <Subtotal />
              </div>
          )}
        </div>
    );
}

export default Checkout
