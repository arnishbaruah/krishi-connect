const User = require("../model/User");
const AddGovSchemes = require("../model/AddGovSchemes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require('crypto');
const OtpSchema = require("../model/userOtpModel");
require("dotenv").config();

require("dotenv").config();
// new way
// exports.register =(req,res,next)=>{
//     res.send("register Route")
// }

// Generate random OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
//below function is for adding government schemes
const addgovschemes = async (req, res) =>{
  const {name, details, state, type, category, link} = req.body;

  if (!name || !details || !state || !type || !category || !link) {
     return res.status(200).json({ message: "All input fields are required" }); 
    }
    try{
      // const schemeExist = await AddGovSchemes.findOne({ name: name });
      // if(schemeExist){
      //   return res.status(400).json({error: "Scheme already Exist"});
      // }else {
        const scheme = new AddGovSchemes({name, details, state, type, category, link});
        await scheme.save();
        res.status(201).json({ message: "Scheme successfully added"});

        //finds all the data present in that collection
        const allData = await AddGovSchemes.find({})

        //collects all the data from database and passes to frontend
        res.json(allData)

      // }
    } catch (err){
      console.log(err);

      console.log("fail")
    }
}
// below fuction is for registration  
const register = async (req, res, next) => {
 
    // Get user input
    const { fullname, email, password, role, phoneno , city } = req.body;
     console.log(role);
    // Validate user input
    if (!(email && password && fullname && role && phoneno && city)) {
      return res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email: email });
    // console.log(oldUser)
    if(oldUser){
      //otp verifiaction is done then user only need to login
    if (oldUser.verified) {
      res.status(400).json({
        message: "User Already Exist. Please Login",
      });
      return;
    }
      //otp verifiaction is not done then user only need to verify and then login
    else{
      res.json({
        message: "User Already Exist. Please verify otp",
        userStatus:"PENDING"

      });
      // return;
    }
  }
    //Encrypt user password
    try {
    const salt = await bcrypt.genSalt(10);
    encryptedPassword = await bcrypt.hash(password, salt);

    // Create user in our database
    const user = await User.create({
      fullname,
      name:fullname,
      email: email.toLowerCase().trim(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      roleganesh:role,
      role:role,
      phone:phoneno,
      address:city

    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
    const otpResult = await sendOtp(req, res);
    // return new user
    return res.status(201).json({ user: user, otp: otpResult ,  userStatus:"PENDING" , message:"you are register successfull , please verify Otp"});
  }catch (err) {
    return res.status(400).json({ message: "duplicate key" });
  } 
};
// to send otp on email 
const sendOtp = async (req, res) => {
  try {
    const { email } = req.body; // take value from user
    console.log(email);
    // mail configuration
    const transporter = nodemailer.createTransport({
      // Replace with your email provider settings
      service: "Gmail",
      auth: {
        user: process.env.EMAIL, // Replace with your email address
        pass: process.env.PASSWORD, // Replace with your email password or use an app-specific password
      },
    });
    const generatedOTP = generateOTP(); //calling generated function
    const mailOptions = {
      from: process.env.EMAIL, // Replace with your email address
      to: email,
      subject: "OTP Verification for Register",
      text: `Your OTP for verification is: ${generatedOTP}`,
    };
    // if old otp is there then remove it 
    const oldUser = await OtpSchema.findOne({ email: email });
    console.log(oldUser);
    if (oldUser) {
      await OtpSchema.deleteMany({ email: email });
    }

    //Encrypt user password
    const salt = await bcrypt.genSalt(10);
    encryptedOtp = await bcrypt.hash(generatedOTP, salt);

    // Create user in our database
    const otp = await OtpSchema.create({
      email: email.toLowerCase(),
      otp: encryptedOtp,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      createdAt: Date.now(),
      expiresAt: Date.now() + 360000, /// valide for 6 hour
    });
    await transporter.sendMail(mailOptions);
    return 1;
  } catch (error) {
    console.error("Error sending email:", error);
    return -1; //error in processing

    // return res.status(400).json({
    //   success:false,
    //   message:"otp send sucessfull"
    // })
  }
};

// below function for verify otp 
const verifyOtp = async (req, res) => {
  const { otp, email } = req.body;
  try {
    const oldUser = await OtpSchema.findOne({ email: email });
    console.log(oldUser);
    // check expire date is less thaa date.now if less that is otp is expire ask to user resend it 
    if (oldUser.expiresAt < Date.now()) {
      res.status(400).json({
        success: "Not verified",
        message: "otp verification time out",
      });
    }
    if (oldUser && (await bcrypt.compare(otp, oldUser.otp))) {
      await OtpSchema.deleteMany({ email: email });
      await User.updateOne({ email: email }, { verified: true }); //update verified status true

      res.status(200).json({
        success: "verified",
        message: "otp verified sucessfull",
      });
    } else {
      res.status(400).json({
        success: "Not verified",
        message: "otp verification feild",
      });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(400).json({
      success: false,
      message: "otp verification feild",
    });
  }
};

// below function for logIn 
const login = async (req, res, next) => {
  // res.send("login Route");
  try {
    // Get user input
    const { email, password } = req.body;
  
  console.log(email , password);
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
      return;
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email: email });
    // check user is verified or not if verified then processed login functionality 
  if(user.verified){
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY
        // {
        //   expiresIn: "2h",
        // }
      );

      // save user token
      user.token = token;
      await user.save();
    // user
      return res.status(200).json(user);
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    } } 
    // if not verify ask user to verify 
    else{
      return res.status(400).json({ message: "please verify otp" });

    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// below function for  forgot password 
const forgotpassword = async(req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL, // Replace with your email address
      pass: process.env.PASSWORD, // Replace with your email password or use an app-specific password
    },
  });
  try {
    const { email } = req.body;

    // Find the user with the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate a unique reset token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Set the reset token and expiration time in the user document
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 3600000; // Token valid for 1 hour

    // Save the updated user document
    await user.save();

    // Send the reset token to the user's email
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Password Reset',
      html: `<p>Click the following link to reset your password: <a href="http://localhost:3000/resetpassword/${resetToken}">Reset Password</a></p>`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending reset token:', error);
    res.status(500).json({ error: 'Failed to send reset token' });
  }
} 

// below function is used to reset password 
const resetpassword = async(req, res, next) => {
  console.log("resent")
  try {

    const token = req.params.token;  // take url value 
    const { password } = req.body;
    // console.log(token)
    // Find the user with the provided reset token
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password and reset token fields
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;

    // Save the updated user document
    await user.save();

    res.json({ success: true });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ error: 'Failed to reset password' });
  }
};

const getContextData = async(req,res)=>{
  try {
    const user = await User.findById(req.params.id);
    console.log("context value");
    res.json(user);
    // console.log(res.json(product))
  } catch (error) {
    res.json({ message: error });
  }
}

const wlcom = async (req, res, next) => {
  try {
    const data = await User.findById(req.user.user_id);
    res.json(data);
    // console.log(res.json(product))
  } catch (error) {
    res.json({ message: error });
  }
  // res.send(req.user);
  return;
};

// get gove scheme 

const getgovschemes = async (req, res, next) => {
  // res.send("login Route");
  try {
    // Get user input
   const allData = await AddGovSchemes.find({})
       return res.status(200).json(allData)
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Internal get scheme error" });
  }
};


// if now route is found then this route is run
const noRouteFound = (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
};

const uploadFile = (req, res) => {
   if (req.file) {
    res.json({ message: 'File uploaded successfully' });
  } else {
    res.status(400).json({ message: 'No file uploaded' });
  }

};

module.exports = {
  addgovschemes,
  register,
  sendOtp,
  login,
  forgotpassword,
  resetpassword,
  wlcom,
  getgovschemes,
  noRouteFound,
  verifyOtp,
  getContextData,
  uploadFile
};
