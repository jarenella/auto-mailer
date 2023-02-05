const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

// router.get('/test', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/test.html'))
// });

module.exports = router;