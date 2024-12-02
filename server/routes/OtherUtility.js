const utilityRouter = require("express").Router();

const {Contactus} = require('../controllers/UtilityController')
utilityRouter.post("/contactus", Contactus );
module.exports= utilityRouter;