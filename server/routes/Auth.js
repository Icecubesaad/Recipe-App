const express = require("express");
const router = express.Router();
const { validate, ValidationError, Joi } = require("express-validation");
const User = require("../model/UserSchema");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt_secret = "recipehehe";
const jwt = require("jsonwebtoken");
const FetchDetails = require("../middleware/FetchingDetails")
router.post(
  "/signup",
  [body("Email").isEmail(), body("Password").isLength({ min: 5 })],
  async (req, res) => {
    const { Email, Password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const emailErrors = errors.array({ onlyErrors: true, attributeFilter: 'email' });
        const passwordErrors = errors.array({ onlyErrors: true, attributeFilter: 'password' });
        if (emailErrors.length > 0 && passwordErrors.length > 0) {
          return res.status(422).json({ emailErrors, passwordErrors });
        } else if (emailErrors.length > 0) {
          return res.status(405).json({ emailErrors });
        } else if (passwordErrors.length > 0) {
          return res.status(401).json({ passwordErrors });
        }
      }
    try {
      const already_exist = await User.findOne({ Email });
      if (already_exist) {
        res.status(403).json({ error: "User already exist" });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashed_pass = await bcrypt.hash(Password, salt);
        const create_user = await User.create({
          Email: Email,
          Password: hashed_pass,
        });
        res.status(200).json(create_user);
      }
    } catch (error) {
      res.status(402).json({ error: error });
    }
  }
);
router.post("/signin", async (req, res) => {
  const { Email, Password } = req.body;
  const password_db = await User.findOne({ Email });
  if(!password_db){
    res.status(400).json({error:"User not found"})
  }
  else{
      const verified = await bcrypt.compare(Password, password_db.Password);
      if (!verified) {
        res.status(400).send({ error: "Invalid credentials" });
      } else {
        const user_data = {
          User: {
            id: password_db.id,
          },
        };
        const jwt_token = await jwt.sign(user_data, jwt_secret);
        res.status(200).json({ jwt_token: jwt_token });
      }
  }
});
router.get("/getDetails",FetchDetails,async(req,res)=>{
  const id = req.User.id;
  const User_details = await User.findById({_id:id})
  if(!User_details){
    res.json("User not found")
  }
  else{
    res.status(200).json(User_details)
  }
})

module.exports = router;
