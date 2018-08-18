const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Box ist gefüllt'
    })
});

router.post('/', (req, res, next) =>{
    const user = {
        name: req.body.name,
        pw: req.body.pw
    };
    res.status(200).json({
        message: 'Handling Post',
        createdUser: user
    })
});

router.get('/:box', (req, res, next) =>{
    const box = req.params.box;
    if (box === '1'){
        res.status(200).json({
            message: 'boxinhalt'
        });
    } else {
        res.status(200).json({
            message: 'kein Boxinhalt'
        });
    }
    next();
});

module.exports = router;