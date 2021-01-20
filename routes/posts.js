const router = require('express').Router()
const verify = require('./verifyToken')

router.get('/', verify, (req, res) => {
    res.json({
        posts: 
        {
            title: 'Post title', 
        description: 'My first post'
    }})
})

module.exports = router;
