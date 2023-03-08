const express = require("express");
const router = express.Router();

const  { 
    getSignUp,
    getRoomAllotment,
    getMessAttendance
} = require('../controllers/homepage');

router.get("/signup", (req,res) =>
  {
    getSignUp(req,res);
  }
)

router.get("/Room", (req,res) =>
  {
    getRoomAllotment(req,res);
  }
)

router.get("/Mess", (req,res) =>
  {
    getMessAttendance(req,res);
  }
)


module.exports = router;