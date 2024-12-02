// below fuction is for registration  
const ContactUs = require('../model/ContactUs') 

const Contactus = async (req, res, next) => {
 
    // Get user input
    const { name, email, message} = req.body;
    
    // Validate user input
    if (!(email && name && message)) {
      return res.status(400).send("All input is required");
    }

  //Encrypt user password
    try {
    
    const contactUsData = await ContactUs.create({
      name,
      email: email.toLowerCase().trim(), // sanitize: convert email to lowercase
      message
    });

    return res.status(201).json({ data : contactUsData , message:"you are message has submited successfull"});
  }catch (err) {
    return res.status(400).json({ message: "duplicate key" });
  } 
};

module.exports = {
  Contactus
}