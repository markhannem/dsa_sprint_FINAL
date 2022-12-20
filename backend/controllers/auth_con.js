import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utilities/error.js";
import jwt from "jsonwebtoken";

// Creating a new user and using bcrypt to encrypt password
// takes a req, res and next
// next is used to control to next middleware function
// bycrypt adds randomness to the password hash so when stored in the mongodb it will randomize the shown password for security
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User Created Successfully");
  } catch (err) {
    next(err);
  }
};

// login function handles process of logging into the app
// attempts to find user in the database using "findOne" method
// if no user found next passes to next middleware
// if user found, bycrypt.compare checks password to hashed password, if correct user is allowed access to app
// jwt.sign generates a JSON WEb Token that encodes the users _id and _isAdmin status
// JWT is sent to client as a cookie with other user detials but not the password and _isAdmin status

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User Not Found"));

    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!checkPassword) return next(createError(400, "Incorrect Password"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      // httpOnly prevents client scripts from reaching cookies
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
