const { getUser } = require("../service/auth");

const checkForAuthentication = (req, res, next) => {
    const authoriztionHeaderValue = req.cookies?.uid;
    req.user = null;

    if (!authoriztionHeaderValue) {
        return next()
    }

    const token = authoriztionHeaderValue;
    const user = getUser(token)

    req.user = user
    return next()
}

const restrictTo = (roles = []) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.redirect('/signin')
        }

        if (!roles.includes(req.user.role)) {
            return res.send("Sorry You are UnAuthorized")
        }

        return next()
    }
}

// const restrictToLoggedinUserOnly = async (req, res, next) => {
//     const userUid = req.cookies?.uid;

//     if (!userUid) {
//         return res.redirect('/signin')
//     }

//     const user = await getUser(userUid)

//     if (!user) {
//         return res.redirect("/signin")
//     }

//     req.user = user;
//     next()
// }

module.exports = { checkForAuthentication, restrictTo };