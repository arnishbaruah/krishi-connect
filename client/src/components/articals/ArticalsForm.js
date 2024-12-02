
import React, { useState, useEffect } from "react";
import farmer1 from "../../asset/farmer4.jpg";
import "../../css/ArticalsCard.css";
import { uploadArticals } from "../../api/utilityAPI";
import { useUserContext } from '../../context/UserContext';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import App from '../../firebase'
export default function ArticalsForm({ sendDataToParent }) {
  const [currentDate, setCurrentDate] = useState("");
  const [file, setFile] = useState(null);
const [auth, setauth] = useState(false);
const [url, setUrl] = useState(null);
  // usestate for set input data
  const [formData, setFormData] = useState({
    title: "",
    // date: {currentDate} ,
    thumbnaiText: "",
    paragraph1: "",
    paragraph2: "",
    category: "",
  });
  const { details ,setDetails } = useUserContext();

  useEffect(()=>{
    if (localStorage.getItem("access_token")) {
      // Navigate("/");
      setauth(true);
    } else{
      setauth(false);
    }
   

  },[details])
  // Extracting form data from the state
  const { title, thumbnaiText, paragraph1, paragraph2, category, city } =
    formData;

  // Handler function to update form data when input fields change
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };



  // on file change Handler
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    // console.log(object)


  };
  useEffect(() => {
    // This will log the updated value of file whenever it changes
    file && uploadFile(file);
  }, [file]);

  const uploadFile = (file) =>{
    const storage = getStorage(App);

    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: 'image/jpeg'
    };
    
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
    
          // ...
    
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, 
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          // setFile(downloadURL)
          setUrl(downloadURL)

        });
      }
    );
  }

//   sent data from child to parent 
  const handleSendDataToParent = () => {
    sendDataToParent("data Update");
  };

  const onSubmit = async (e) => {
    await uploadArticals(url, formData);
    handleSendDataToParent();
  };

  
  return (
    <>

{auth && 
<div className="d-flex justify-content-end sticky-button">
        <button
          className="btn  mx-3 darkGreenbg "
          data-toggle="modal"
          data-target="#articalmodel"
        >
          Write Articles <span class="badge badge-light ml-2">new</span>
        </button>
      </div> }
    {/* model for articals  */}
    <div
        class="modal fade"
        id="articalmodel"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-scrollable modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title darkGreenText" id="exampleModalLongTitle">
                Articles Information{" "}
                <span class="badge badge-pill badge-warning text-right">
                  Scroll Down to Submit Your Artical
                </span>
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="mb-3">
                <label className="form-label mediumGreenText">Title</label>
                <input
                  onChange={onChangeHandler}
                  value={title}
                  type="text"
                  name="title"
                  className="form-control shadow-none"
                  placeholder="Enter Title of Articals in 8 words"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label mediumGreenText">
                  Thumbnail Text
                </label>
                <input
                  onChange={onChangeHandler}
                  value={thumbnaiText}
                  type="text"
                  name="thumbnaiText"
                  className="form-control shadow-none"
                  placeholder="Enter Thumbnail text below 20 word"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label mediumGreenText">
                  Paragraph 1
                </label>
                <input
                  onChange={onChangeHandler}
                  value={paragraph1}
                  type="text"
                  name="paragraph1"
                  className="form-control shadow-none"
                  placeholder="Write Artical Description Here"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label mediumGreenText">
                  Paragraph 2{" "}
                  <span class="badge badge-pill badge-warning text-right">
                    {" "}
                    Optional{" "}
                  </span>
                </label>
                <input
                  onChange={onChangeHandler}
                  value={paragraph2}
                  type="text"
                  name="paragraph2"
                  className="form-control shadow-none"
                  placeholder="Write Artical Description Here"
                />
              </div>

              <div class="custom-file">
                <label className="form-label mediumGreenText">
                  {" "}
                  Thumbnail Photo{" "}
                  <span class="mx-3 badge badge-pill badge-warning text-right">
                    {" "}
                    This photo will be shown on the card{" "}
                  </span>
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="form-control-file mb"
                  placeholder="Write Artical Description Here"
                  required
                />
              </div>

              <div className="mt-3">
                <label className="form-label mediumGreenText">
                  Select Category
                </label>
                <div class="dropdown-container" style={{ width: "94%" }}>
                  <select
                    class="custom-select form-control shadow-none text-justify"
                    name="category"
                    value={category}
                    onChange={onChangeHandler}
                    required
                  >
                    <option value="all">All</option>
                    <option value="techniques">
                      Techniques: Various farming methods and practices
                    </option>
                    <option value="technical">
                      Technical: Machinery, equipment, and precision farming
                    </option>
                    <option value="crop_management">
                      Crop Management: Crop selection, cultivation, and
                      maintenance
                    </option>
                    <option value="pest_disease_control">
                      Pest and Disease Control: Managing and controlling
                      agricultural pests and diseases
                    </option>
                    <option value="soil_health">
                      Soil Health: Soil quality, fertility, and improvement
                    </option>
                    <option value="sustainable_farming">
                      Sustainable Farming: Eco-friendly and sustainable
                      agricultural practices
                    </option>
                    <option value="livestock_farming">
                      Livestock Farming: Livestock management and care on the
                      farm
                    </option>
                    <option value="irrigation_water_management">
                      Irrigation and Water Management: Efficient water use and
                      irrigation systems
                    </option>
                    <option value="market_marketing">
                      Market and Marketing: Agricultural marketing and selling
                      produce
                    </option>
                    <option value="farm_economics">
                      Farm Economics: Financial aspects, budgeting, and
                      profitability in farming
                    </option>
                  </select>
                </div>
              </div>

              <div class="d-flex justify-content-center mb-2">
                <span class="mx-3 badge badge-pill badge-warning text-right">
                  {" "}
                  Creating articles for advertising or sponsorship is strictly
                  prohibited according to our terms and conditions.{" "}
                </span>
              </div>

              <div class="d-flex align-items-center justify-content-between mb-2">
                <button
                  onClick={(e) => onSubmit(e)}
                  className="btn darkGreenbg SHADOW-NONE w-100"
                  data-dismiss="modal"
                >
                  Publish Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
