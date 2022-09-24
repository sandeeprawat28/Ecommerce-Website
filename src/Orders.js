import React, { useState, useEffect } from 'react'
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
    const [{ basket, user }, dispatch ] = useStateValue();
    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        if(user) {
            db
            .collection('users')    //Accessign users DB
            .doc(user?.uid)     //Getting specific user logged in
            .collection('orders')       //Accessign user order
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (       //Realtime snapshot of DB
                setOrders(snapshot.docs.map(doc => ({       //Going to all orders
                    id: doc.id,     //Get user Id
                    data: doc.data(),
                }))
                )
            ))
        } else {
            setOrders([]);
        }
    }, [user]);
   
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders
