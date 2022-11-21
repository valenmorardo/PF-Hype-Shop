const { Router } = require("express");

const stripe = require("stripe")(
  "sk_test_51M5ZTdGXvMNs99wedH7zQmaBdkEQGmqkztmE7RWHeWEnRSBCxtxgXKDqloiL7INNZj1LvQpivdLpQxJEBS48Mzcl00UgYTB76P"
);

const router = Router();

router.post("/checkout", async (req, res) => {
  const line_items = req.body.cartItems.map((item) => {
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
    line_items,
    mode: "payment",
    success_url: "http://localhost:3000/checkout-success",
    cancel_url: "http://localhost:3000/orderCarry",
  });

  res.send({ url: session.url });
});

module.exports = router;
