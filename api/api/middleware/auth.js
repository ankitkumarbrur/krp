const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        // res.status(200).json({
        //     message: req.headers.authorization,
        //     decoded: jwt.verify(token, process.env.JWT_KEY)
        // });
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};