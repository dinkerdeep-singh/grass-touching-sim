const express = require('express');
const {Image} = require('../db/db')

const router = express.Router();

router.get('/image', async (req, res) => {
    const images = await Image.find();
    const id = Math.floor(Math.random() * images.length);

    const image = await Image.findOne({id: id});

    res.status(200).json({
        image
    });
});

router.post('/upload', async (req, res) => {
    const images = await Image.find();

    const image = await Image.create({
        id: images.length,
        image: req.body.image
    })

    res.status(200).json({
        message: "Image uploaded..."
    })
})

module.exports = router;