const express = require("express")

const { handleHomeRender, handleHomeRenderAll, handleSignUpRender, handleSignInRender } = require("../controllers/serverRouteController")
const { restrictTo } = require("../middlewares/auth")
const router = express.Router()

router.get("/", restrictTo(["NORMAL", "ADMIN"]), handleHomeRender)

router.get("/signup", handleSignUpRender)

router.get("/signin", handleSignInRender)

router.get("/admin", restrictTo(["ADMIN"]), handleHomeRenderAll)

module.exports = router;