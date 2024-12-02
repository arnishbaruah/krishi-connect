// import axios from 'axios';


// const URL = 'http://localhost:8800/api';

// export const uploadArticals = async(file,inputformData) => {
//     // const formData = new FormData();
//     console.log("input")
//     console.log(inputformData)
//     // formData.append("file", file);
//     // formData.append("data", JSON.stringify(inputformData));
//  console.log(JSON.stringify(inputformData))
//     try {
//       await axios.post("http://localhost:8800/api/uploadartical", inputformData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       alert("File uploaded successfully");
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
// };



import axios from 'axios';

const URL = 'https://krushi-connect-backend.onrender.com';

export const uploadArticals = async(url,inputformData) => {
  console.log(inputformData)
  console.log(url)
  const formdata ={
    ...inputformData,
    file:url
  }
  // const formData = new FormData();
  // formData.append("file", url);
  // formData.append("data", JSON.stringify(inputformData));
  console.log("hiii")
   console.log(formdata);

    try {
     const data = await axios.post(`${URL}/articalapi/uploadartical`, formdata);
      alert("File uploaded successfully");
    } catch (error) {
      alert(error.message);
      console.error("Error uploading file:", error);
    }
};


export const getData = async() =>{
  try{
    return await axios.get(`${URL}/articalapi/getarticals`);
 }
 catch(err){
     console.log("Error occurs while running fetching Articals function",err);
 }
}


export const getDatawithId = async(id) =>{
  console.log("dayayah")
  console.log(id)
  try{
    return await axios.get(`${URL}/articalapi/getarticalsDescription/${id}`);
 }
 catch(err){
     console.log("Error occurs while running fetching Articals function",err);
 }
}


export const  getContextData = async(id) =>{
  try{
    return await axios.get(`${URL}/api/getContextData/${id}`);
 }
 catch(err){
     console.log("Error occurs while context function",err);
 }
}

export const  ContactData = async(formData) =>{
  try{
    return await axios.post(`${URL}/otherutility/contactus` , formData);
 }
 catch(err){
     console.log("Error occurs while context function",err);
 }
}