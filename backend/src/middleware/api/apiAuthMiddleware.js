const User = require('../../models/UserModel')
export const isLoggedIn = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        if (error || !user)
            return res.json({
                status: 'failed',
                message: 'User not authenticated'
            })
        next()
    })
}

export const isAdmin = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        if (error || !user)
            return res.json({
                status: 'failed',
                message: 'User not authenticated'
            })

        if (user.role_id != 'admin') {
            return res.json({
                status: 'failed',
                message: 'Access denied'
            })
        }
        next()
    })
}


