const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
   res.status(200).json({
       message: 'Handling Get'
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

router.get('/:user/:pw', (req, res, next) =>{
    const user1 = req.params.user;
    const pw = req.params.pw;
    if (user1 === '1' && pw == "1111"){
        res.status(200).json({
            message: 'hella'
        });
    } else {
        res.status(200).json({
            message: 'falsch'
        });
    }
    next();
});

module.exports = router;