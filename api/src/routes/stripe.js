const { Router } = require("express");

const stripe = require("stripe")(
  "sk_test_51M7OX4DZco7m31EklNnEF4oBrOryJQCAgIphkarbNMFBwzr3cDSFBBlGQUMY4pWVUuwE3ARGpQ4VUyR2RyAURqIg00H2Qspnhk"
);

const router = Router();

router.post("/checkout", async (req, res) => {
  
  const line_items = await req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "ars",
        product_data: {
          name: item.title,
          images: item.pictures,
          description: `Zapatilla marca ${item.brand} color ${item.colors[0]} para ${item.gender} talle ${item.sizes[0]}`,
          metadata: { id: item.id },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.cantidad,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    
    shipping_address_collection: {allowed_countries: ['AR']},
    shipping_options: [
      
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {amount: 0, currency: 'ars'},
          display_name: 'Free shipping',
          delivery_estimate: {
            minimum: {unit: 'business_day', value: 5},
            maximum: {unit: 'business_day', value: 7},
          },
        },
      },
    ],
    line_items,
    mode: "payment",
    success_url: "http://localhost:3000/checkout-success",
    cancel_url: "http://localhost:3000/",
  });

  res.send({ url: session.url });
});

module.exports = router;
