const { Router } = require("express");
const { Product } = require("../../db.js");

const router = Router();

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    
      const getSneakers = await Product.findByPk(id)

        if(getSneakers) return res.status(200).send(getSneakers)
        else res.status(404).send('ID not found')
    
  });

module.exports = router;

