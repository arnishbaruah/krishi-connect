const User = require("../model/User");
const ArticalSchema = require("../model/Articals");
require("dotenv").config();

const uploadArtical = async (req, res) => {
    const { title, thumbnaiText,paragraph1, paragraph2, category} = JSON.parse(req.body.data);
    // if (!(title && thumbnaiText && paragraph1 && paragraph2 && category )) {
    //   return res.status(400).json({  message:"All input Feild Are Required"});
      
    // }
    // const { filename, path } = req.file;
    // const formData = JSON.parse(req.body.data);
    // const formData = JSON.parse(req.body.data);
console.log("Hello from backend");
    try {

    const artical = await ArticalSchema.create({
      title : req.body.title,
      thumbnaiText: req.body.thumbnaiText,
      paragraphOne : req.body.paragraph1,
      paragraphTwo: req.body.paragraph2,
      category: req.body.category,
      path:req.body.file,
      // filename:filename,


    });
    // save user token
  
    return res.status(201).json({  message:"Your Artical Publish successfull"});
  }catch (err) {
    return res.status(400).json({ error: err.message ,  message: "error occure during aploding articals" });
  } 
};

const getArtical = async (req, res) => {
  try {
    const data = await ArticalSchema.find({}); 
console.log(data)
    res.status(200).json({data:data , status : "success" } );
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getArticalDescription = async (req, res) => {
  console.log("hii from backend")
  console.log(req.params.id);
  const id =req.params.id
  try {
    const data = await ArticalSchema.find({_id :id }); 
console.log(data)
    res.status(200).json({data:data , status : "success" } );
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
    uploadArtical ,
    getArtical,
    getArticalDescription

  };