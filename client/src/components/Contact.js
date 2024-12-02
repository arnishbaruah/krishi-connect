import axios from 'axios';
import React , {useState} from 'react';
import {ContactData} from '../api/utilityAPI'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name , value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const res = await ContactData(formData);
    console.log(res.data.data)
    alert(res.data.message)
    setFormData({
      name: "",
      email:"",
      message:""
    })
    // Here, you can send the formData to the backend.
    // You can use Axios or the Fetch API to make a POST request to your backend API.
  };

  return (
    <section className="contact my-4" id='contact'>
      <div className="container lightGreenbg">
      <h2 className="text-center mb-3 p-3 darkGreenText">Contact Us</h2>

        <div className="row  p-3">

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="contact-info">
              <h3 className='darkGreenText'>Contact Information</h3>
              <ul className="list-unstyled">
                <li className="mb-3 contact-item">
                  <i className="fas fa-envelope contact-icon px-2"></i>
                  <a href="mailto:contact@farmers-things.com" className="contact-link mediumGreenText">contact@farmers-things.com</a>
                </li>
                <li className="mb-3 contact-item mediumGreenText">
                  <i className="fas fa-phone contact-icon px-2"></i>
                  (123) 456-7890
                </li>
                <li className="contact-item mediumGreenText">
                  <i className="fas fa-map-marker-alt contact-icon px-2"></i>
                  123 Farm Road, Ruralville
                </li>
              </ul>
              {/* <div className="social-icons mt-4">
                <a href="#" className="me-3"><i className="fab fa-facebook"></i></a>
                <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
                <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form">
             
            <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label mediumGreenText">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label mediumGreenText">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label mediumGreenText">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn darkGreenbg" style={{ color: "white" }}>
        Send Message
      </button>
    </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
