
const auth = require("../middelware/Authentication");
// const upload = require("../middelware/FileUploads")
const { register,login,forgotpassword,resetpassword,wlcom, noRouteFound,sendOtp,verifyOtp,getContextData, uploadFile, addgovschemes, getgovschemes} = require("../controllers/Authentication");

const router = require("express").Router();
router.post("/register",register);
router.post("/addgovschemes",addgovschemes);
router.get("/getgovschemes",getgovschemes);

// router.post("/sendotp",sendOtp);
router.post("/verifyOtp",verifyOtp);
router.post("/login",login);
// router.post("/forgotpassword",forgotpassword);
// router.post("/resetpassword/:token",resetpassword);
router.get("/",auth,wlcom);
router.get("/getContextData/:id",getContextData);

// router.post("/upload", upload.single('file') ,uploadFile);


router.post("*",noRouteFound);



module.exports= router;