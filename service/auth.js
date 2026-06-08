// const sessionIdToUserMap = new Map()
const jwt = require('jsonwebtoken')
const secretKey = 'habib@qureshi21'

const setUser = (user) => {
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role,
    }
    return jwt.sign(payload, secretKey)
}

const getUser = (token) => {
    if (!token) return null;
    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        return null
    }
}

module.exports = {
    setUser,
    getUser
}