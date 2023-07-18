const expressm = require("express");
const routerm = expressm.Router();
const { body, validationResult } = require("express-validator");
const Userm = require("../models/User");
const bcryptm = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/User");
const JWT_SECRET='rajisagoodboy'
const fetchuser = require("../middleware/fetchUser");
// ROUTE1 :Aunthenticate a user using: POST "/api/Authen/newUser".no login required
// Doesn't require authentication
routerm.post(
  "/newUser",
  [
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters long"),
    body("email_id").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    let success=false;
    // if there are errors ,return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
      // Check whether the user with this  email already exists
      let user = await Userm.findOne({ email_id: req.body.email_id });
      if (user) {
        return res
          .status(400)
          .json({success, error: "Sorry, a user already exists with this email" });
      }
      //create a new user here
      const salt = bcryptm.genSaltSync(10);
      req.body.password = await bcryptm.hashSync(req.body.password, salt);
      user = new Userm(req.body);
      await user.save();
      // this is a token code(next 8 lines)
      const data = {
        user: {
          id: user.id,
        },
      };
      const jtoken = jwt.sign(data,JWT_SECRET);
      // console.log(jtoken);
      //   res.send(req.body);
      success=true;
      res.send({success,token: jtoken}); //sending token itself
    } catch (error) {
      res.status(500).json({success, error: "Internal server error occured" });
    }
  }
);
// ROUTE2:Create a user using: POST "/api/Authen/login".no login required
// here we are doing authentication part
routerm.post(
  "/login",
  [
    // only checking email and password whether it's valid or not
    // so seeing for basic things here if email || password  is empty  noneed to go to dserver here only it's is rejected
    body("email_id").isEmail().withMessage("Invalid email"),
    body("password")
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    let success=false;
    // if there are errors ,return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    const { email_id, password } = req.body;
    try {
      let user = await Userm.findOne({ email_id });
      if (!user) {
        // success=false;
        return res
          .status(400)
          .json({ success,error: "Login with correct mail" });
      }
      const passwordCompare = await bcryptm.compare(password, user.password);
      if (!passwordCompare) {
        // success=false;
        return res
          .status(400)
          .json({success, error: "Login with correct Credentials" });
      }
      // if someone reached till here means everything is fine
      // so send payload (data of user)for the
      const data = {
        user: {
          id: user.id,
        },
      };
      const jtoken = jwt.sign(data,JWT_SECRET);
      // console.log(jtoken);
        // res.send(req.body);
      success=true;
      res.status(200).json({ success, token: jtoken }); //sending token itself
    } catch (error) {
      res.status(500).json({success, error: "Internal server error occured" });
    }
  }
);

// ROUTE3:get user details using: POST "/api/Authen/getuser".**login required**
//here login is required so we have to send jwt token
//fetchuser will call fetchuser.js
// have to see from chatgpt how it's working
routerm.post("/getuser",fetchuser,async (req, res) => {
    try {
      // id is present in my authtoken that wil be used here (data mein id he tha na )
      userId = req.user.id;
      const user = await Userm.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      res.status(500).json({ error: "Internal server error occured" });
    }
  }
);
module.exports = routerm;
