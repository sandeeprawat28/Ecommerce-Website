const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");            
const stripe = require("stripe")
(
    "sk_test_51JGICPSDMq6MFB4EWMiHYirwVC7JucBKW0CfJgN7ZZg7e3RKxJgLDjBm6dT1MMwDxDiIBH9BWSoHpLTeZeMQ2XBR00ukBDD43l"
);

// API config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.post("/payments/create", async(req, res) => {
    const total = req.query.total;   

    console.log("Payment Request Recieved BOOM..!!! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create ({
        amount: total,
        currency: "usd",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);