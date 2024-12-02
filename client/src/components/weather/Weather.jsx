import React, { useState } from 'react';
import axios from 'axios';
import "../../css/weather.css";
import cloud from "../../asset/cloud.png";
// import { Dropdown } from 'react-bootstrap';
const Weather = () => {
  const [city, setCity] = useState('');
  const [Temp, setTemp] = useState(false);
  const [data, setData] = useState({
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    country: 'IN',
    sunrise: 0,
    sunset: 0,
    wind: 0,
  });

  const [selectedState, setSelectedState] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [cropInfo, setCropInfo] = useState({});
  const states = {
    'Andhra Pradesh': [
      'Rice', 'Maize', 'Sorghum (jowar)', 'Pearl millet (bajra)', 'Finger millet (ragi)', 'Wheat',
      'Pulses (such as pigeon pea, chickpea, and green gram)', 'Groundnut (peanuts)', 'Cotton', 'Sugarcane',
      'Tobacco', 'Oilseeds (including sunflower, soybean, and safflower)',
      'Spices (such as red chilli and turmeric)', 'Cashew', 'Coconut', 'Banana', 'Mango', 'Papaya', 'Guava',
      'Grapes', 'Pomegranate', 'Citrus fruits (oranges, lemons, etc.)', 'Vegetables (various types)',
      'Flowers (for floriculture)',
    ],
    
    'Arunachal Pradesh':
[
'Rice',
'Maize',
'Millet',
'Wheat',
'Buckwheat',
'Potatoes',
'Barley',
'Oilseeds (such as mustard)',
'Legumes (peas, lentils)',
'Ginger',
'Turmeric',
'Cardamom',
'Oranges',
'Apples',
'Pineapples',
'Bananas',
'Papayas',
'Citrus fruits',
'Kiwifruit',
'Passion fruit',
'Betel leaves and nuts',
'Bamboo shoots',
'Tea (in some regions)'
],
    'Assam': [
      'Tea', 'Rice', 'Jute', 'Sugarcane',
      'Fruits (citrus, banana, etc.)', 'Spices (ginger, turmeric, etc.)',
      'Rice Subtypes: Bora, Joha', // Subtypes for Rice
    ],
    'Bihar': [
      'Rice', 'Wheat', 'Maize', 'Pulses', 'Sugarcane', 'Oilseeds',
      'Fruits (mangoes, litchi, etc.)',
    ],
    'Chhattisgarh': [
      'Rice', 'Maize', 'Pulses', 'Oilseeds', 'Sugarcane', 'Chilies', 'Groundnuts',
    ],
    'Goa': [
      'Rice', 'Coconut', 'Cashew', 'Fruits (mangoes, pineapples, etc.)',
    ],
    'Gujarat': [
      'Cotton', 'Groundnuts', 'Rice', 'Wheat', 'Oilseeds (mustard, groundnut)', 'Pulses',
      'Sugarcane', 'Fruits (mangoes, bananas, etc.)',
    ],
    'Haryana': [
      'Wheat', 'Rice', 'Sugarcane', 'Cotton', 'Pulses', 'Oilseeds',
      'Fruits (citrus, guava, etc.)',
    ],
    'Himachal Pradesh': [
      'Apples', 'Potatoes', 'Wheat', 'Barley', 'Maize',
      'Vegetables (peas, cabbage, etc.)',
    ],
    'Jharkhand': [
      'Rice', 'Maize', 'Pulses', 'Oilseeds', 'Sugarcane', 'Corn',
      'Fruits (mangoes, guava, etc.)',
    ],
    'Karnataka': [
      'Rice', 'Sugarcane', 'Coffee', 'Tea', 'Silk',
      'Fruits (bananas, grapes, etc.)', 'Spices (black pepper, cardamom, etc.)',
    ],
    'Kerala': [
      'Rice', 'Coconut', 'Rubber', 'Spices (pepper, cardamom, cloves, etc.)',
      'Tea', 'Coffee', 'Fruits (bananas, pineapple, etc.)',
    ],
    'Madhya Pradesh': [
      'Soybeans', 'Wheat', 'Rice', 'Maize', 'Pulses', 'Oilseeds (mustard, soybean)',
      'Sugarcane', 'Cotton',
    ],
   'Maharashtra': [
    'Sugarcane', 'Cotton', 'Soybeans', 'Jowar (sorghum)', 'Bajra (pearl millet)', 'Wheat', 'Rice', 'Tur (pigeon pea)', 'Toor dal (split pigeon pea)', 'Groundnut (peanuts)', 'Sunflower', 'Maize', 'Gram (chickpeas)', 'Lentils', 'Sorghum (great millet)', 'Oilseeds (such as soybean, sunflower, and safflower)', 'Grapes (Maharashtra is a major grape-producing region)', 'Mangoes', 'Bananas', 'Oranges', 'Papayas', 'Guavas', 'Pomegranates', 'Citrus fruits (lemons, limes, and oranges)', 'Cashew nuts', 'Almonds', 'Vegetables (various types)', 'Flowers (for floriculture)', 'Spices (including turmeric, red chilli, and cumin)', 'Tobacco', 'Coffee (in some regions)', 'Tea (in some regions)', 'Chikoo (Sapodilla)', 'Custard apples', 'Onions', 'Tomatoes', 'Eggplant (brinjal)', 'Potatoes'
  ],
    'Manipur': [
      'Rice', 'Maize', 'Sugarcane', 'Fruits (orange, banana, etc.)',
    ],
    'Meghalaya': [
      'Rice', 'Maize', 'Potatoes', 'Fruits (pineapple, oranges, etc.)',
    ],
    'Mizoram': [
      'Rice', 'Maize', 'Fruits (bananas, oranges, etc.)',
    ],
    'Nagaland': [
      'Rice', 'Maize', 'Millet', 'Vegetables',
      'Fruits (apples, plums, etc.)',
    ],
    'Odisha': [
      'Rice', 'Pulses', 'Oilseeds', 'Sugarcane', 'Cotton',
      'Fruits (mangoes, oranges, etc.)',
    ],
    'Punjab': [
      'Wheat', 'Rice', 'Cotton', 'Sugarcane', 'Barley', 'Pulses',
      'Fruits (citrus, guava, etc.)',
    ],
    'Rajasthan': [
      'Wheat', 'Barley', 'Pulses', 'Oilseeds',
      'Fruits (guava, citrus, etc.)',
    ],
    'Sikkim': [
      'Rice', 'Maize', 'Cardamom', 'Vegetables',
      'Fruits (apples, oranges, etc.)',
    ],
    'Tamil Nadu': [
      'Rice', 'Sugarcane', 'Cotton', 'Groundnuts', 'Pulses',
      'Fruits (mangoes, bananas, etc.)', 'Spices (red chili, turmeric, etc.)',
    ],
    'Telangana': [
      'Rice', 'Cotton', 'Red gram (tur dal)', 'Groundnuts', 'Sorghum (jowar)', 'Maize', 'Sunflower',
    ],
    'Tripura': [
      'Rice', 'Fruits (pineapple, orange, etc.)', 'Rubber', 'Tea',
    ],
    'Uttar Pradesh': [
      'Wheat', 'Rice', 'Sugarcane', 'Pulses', 'Oilseeds',
      'Fruits (mangoes, guava, etc.)',
    ],
    'Uttarakhand': [
      'Apples', 'Rice', 'Wheat', 'Millets',
      'Fruits (peaches, pears, etc.)',
    ],
    'West Bengal': [
      'Rice', 'Jute', 'Sugarcane', 'Tea', 'Pulses',
      'Oilseeds', 'Fruits (mangoes, bananas, etc.)',
    ],
    // Add more states and crop types as needed
  };

  // Define crop information based on state and crop type
  const cropTypes = {
    'Rice': {
      suitableSeason: 'Kharif (Rainy) season for most regions',
      weatherConditions: 'Requires high rainfall and warm temperatures',
    },
    'Maize': {
      suitableSeason: 'Kharif (Rainy) season',
      weatherConditions: 'Grows well in warm temperatures with adequate moisture',
    },
    'Sorghum (Jowar)': {
      suitableSeason: 'Kharif (Rainy) season',
      weatherConditions: 'Drought-tolerant; prefers warm and dry climate',
    },
    'Pearl Millet (Bajra)': {
      suitableSeason: 'Kharif (Rainy) season',
      weatherConditions: 'Drought-tolerant; thrives in hot and arid conditions',
    },
    'Finger Millet (Ragi)': {
      suitableSeason: 'Kharif (Rainy) season',
      weatherConditions: 'Grows in a wide range of climates, including dry and cool regions',
    },
    'Wheat': {
      suitableSeason: 'Rabi (Winter) season',
      weatherConditions: 'Requires cool and temperate climate',
    },
    'Pulses (such as pigeon pea, chickpea, and green gram)': {
      suitableSeason: 'Various seasons, including Kharif and Rabi',
      weatherConditions: 'Varies by type; typically thrives in moderate temperatures',
    },
    'Groundnut (peanuts)': {
      suitableSeason: 'Kharif (Rainy) season',
      weatherConditions: 'Requires warm temperatures and well-distributed rainfall',
    },
    'Cotton': {
      suitableSeason: 'Kharif (Rainy) season',
      weatherConditions: 'Requires hot and humid climate',
    },
    'Sugarcane': {
      suitableSeason: 'Typically grows year-round',
      weatherConditions: 'Requires tropical or subtropical climate with plenty of water',
    },
    'Tobacco': {
      suitableSeason: 'Varies by type',
      weatherConditions: 'Typically grown in areas with warm temperatures and moderate rainfall',
    },
    'Oilseeds (including sunflower, soybean, and safflower)': {
      suitableSeason: 'Varies by type',
      weatherConditions: 'Varies by type; generally requires moderate temperatures and adequate moisture',
    },
    'Spices (such as red chilli and turmeric)': {
      suitableSeason: 'Varies by spice',
      weatherConditions: 'Varies by spice; often grown in regions with warm and humid conditions',
    },
    'Cashew': {
      suitableSeason: 'Typically grows year-round',
      weatherConditions: 'Thrives in tropical climate with well-distributed rainfall',
    },
    'Coconut': {
      suitableSeason: 'Typically grows year-round',
      weatherConditions: 'Requires a tropical climate with high humidity',
    },
    'Banana': {
      suitableSeason: 'Typically grows year-round',
      weatherConditions: 'Thrives in a tropical climate with high humidity',
    },
    'Mango': {
      suitableSeason: 'Typically grows year-round',
      weatherConditions: 'Requires a hot and dry climate',
    },
    'Papaya': {
      suitableSeason: 'Typically grows year-round',
      weatherConditions: 'Thrives in tropical and subtropical climates with well-distributed rainfall',
    },
    'Guava': {
      suitableSeason: 'Typically grows year-round',
      weatherConditions: 'Thrives in tropical and subtropical climates with moderate rainfall',
    },
    'Grapes': {
      suitableSeason: 'Typically grown in the Rabi season',
      weatherConditions: 'Requires a warm and dry climate',
    },
    'Pomegranate': {
      suitableSeason: 'Typically grows year-round',
      weatherConditions: 'Thrives in semi-arid to arid regions with mild winters',
    },
    'Citrus fruits (oranges, lemons, etc.)': {
      suitableSeason: 'Typically grows year-round',
      weatherConditions: 'Requires a warm and subtropical climate',
    },
    'Vegetables (various types)': {
      suitableSeason: 'Varies by vegetable',
      weatherConditions: 'Varies by vegetable; typically grown in temperate to tropical climates',
    },
    'Flowers (for floriculture)': {
      suitableSeason: 'Varies by flower',
      weatherConditions: 'Varies by flower; often grown in regions with moderate temperatures and adequate sunlight',
    },
    'Millet': {
      suitableSeason: 'Kharif (Rainy) season',
      weatherConditions: 'Drought-tolerant; thrives in hot and arid conditions',
    },
    'Buckwheat': {
      suitableSeason: 'Rabi (Winter) season',
      weatherConditions: 'Thrives in cool and temperate climates',
    },
    'Potatoes': {
      suitableSeason: 'Rabi (Winter) season',
      weatherConditions: 'Grows in a wide range of climates, but requires cool temperatures',
    },
    'Barley': {
      suitableSeason: 'Rabi (Winter) season',
      weatherConditions: 'Thrives in cool and temperate climates',
    },
    'Legumes (peas, lentils)': {
      suitableSeason: 'Varies by type',
      weatherConditions: 'Varies by type; often grown in regions with moderate temperatures',
    },
    'Ginger': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Requires a warm and humid climate',
    },
    'Cardamom': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Thrives in tropical and subtropical climates with high rainfall',
    },
    'Oranges': {
      suitableSeason: 'Typically grows year-round',
      weatherConditions: 'Requires a warm and subtropical climate',
    },
    'Apples': {
      suitableSeason: 'Typically grown in the Rabi season',
      weatherConditions: 'Requires a temperate climate with cold winters',
    },
    'Pineapples': {
      suitableSeason: 'Typically grows year-round',
      weatherConditions: 'Thrives in tropical and subtropical climates',
    },
    'Kiwifruit': {
      suitableSeason: 'Typically grown in the Rabi season',
      weatherConditions: 'Requires temperate to subtropical climates',
    },
    'Passion fruit': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Thrives in tropical and subtropical climates',
    },
    'Betel leaves and nuts': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Requires a tropical and subtropical climate',
    },
    'Bamboo shoots': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Thrives in tropical and subtropical climates',
    },
    'Tea (in some regions)': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Requires a warm and humid climate',
    },
    'Jute': {
      suitableSeason: 'Typically grown in the Kharif season',
      weatherConditions: 'Requires high rainfall and warm temperatures',
    },
    'Rice Subtypes: Bora, Joha': {
      suitableSeason: 'Kharif (Rainy) season',
      weatherConditions: 'Requires high rainfall and warm temperatures',
    },
    'Chilies': {
      suitableSeason: 'Typically grown in the Rabi season',
      weatherConditions: 'Requires warm and dry climate',
    },
    'Soybeans': {
      suitableSeason: 'Typically grown in the Kharif season',
      weatherConditions: 'Requires warm temperatures and moderate rainfall',
    },
    'Tur (Pigeon Pea)': {
      suitableSeason: 'Typically grown in the Kharif season',
      weatherConditions: 'Requires warm temperatures and moderate rainfall',
    },
    'Toor Dal (Split Pigeon Pea)': {
      suitableSeason: 'Typically grown in the Kharif season',
      weatherConditions: 'Requires warm temperatures and moderate rainfall',
    },
    'Sunflower': {
      suitableSeason: 'Typically grown in the Rabi season',
      weatherConditions: 'Requires a temperate to subtropical climate',
    },
    'Gram (Chickpeas)': {
      suitableSeason: 'Typically grown in the Rabi season',
      weatherConditions: 'Requires cool and temperate climate',
    },
    'Lentils': {
      suitableSeason: 'Typically grown in the Rabi season',
      weatherConditions: 'Requires cool and temperate climate',
    },
    'Sorghum (Great Millet)': {
      suitableSeason: 'Kharif (Rainy) season',
      weatherConditions: 'Drought-tolerant; thrives in hot and arid conditions',
    },
    'Cashew Nuts': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Thrives in tropical climate with well-distributed rainfall',
    },
    'Almonds': {
      suitableSeason: 'Typically grown in the Rabi season',
      weatherConditions: 'Requires a temperate climate with cold winters',
    },
    'Spices (including turmeric, red chili, and cumin)': {
      suitableSeason: 'Varies by spice',
      weatherConditions: 'Varies by spice; often grown in regions with warm and humid conditions',
    },
    'Coffee (in some regions)': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Requires a tropical or subtropical climate with well-distributed rainfall',
    },
    'Tea (in some regions)': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Requires a warm and humid climate',
    },
    'Chikoo (Sapodilla)': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Thrives in tropical and subtropical climates with moderate rainfall',
    },
    'Custard Apples': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Thrives in tropical and subtropical climates with well-distributed rainfall',
    },
    'Onions': {
      suitableSeason: 'Typically grown in the Rabi season',
      weatherConditions: 'Requires cool and temperate climate',
    },
    'Tomatoes': {
      suitableSeason: 'Typically grown in the Rabi season',
      weatherConditions: 'Requires moderate temperatures and well-distributed rainfall',
    },
    'Eggplant (Brinjal)': {
      suitableSeason: 'Typically grown in the Rabi season',
      weatherConditions: 'Requires moderate temperatures and well-distributed rainfall',
    },
    'Rubber': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Thrives in tropical and subtropical climates with high humidity',
    },
    'Spices (pepper, cardamom, cloves, etc.)': {
      suitableSeason: 'Varies by spice',
      weatherConditions: 'Varies by spice; often grown in regions with moderate temperatures and adequate sunlight',
    },
    'Coffee': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Requires a tropical or subtropical climate with well-distributed rainfall',
    },
    'Tea': {
      suitableSeason: 'Typically grown year-round',
      weatherConditions: 'Requires a warm and humid climate',
    },
  
  
    // Add more crop information as needed
  };
  

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  }

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
    setCropInfo(cropTypes[event.target.value]);
  }

  const handleclick = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8fc7db9ef3e1a9c9d04ade2367f1651e`)
      .then((response) => {
        setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          country: response.data.sys.country,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          wind: response.data.wind.speed,
        });
        setTemp(true);
      });
  }

  return (
    <div className="container mt-5" style={{ marginTop: "40px" }}>
      <div className="weatherContainer  mt-5 mb-5">
          {/* row  */}
          <div className="row main darkGreenbg d-flex justify-content-center mt-5">
            {/* for left div  */}
            <div className="col-md-4 leftdiv  mt-5 mb-5">
              <div className="content border w-100 bg-white  p-3 m-0  ">
                <div className="header d-flex justify-content-center p-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="search location"
                    className="border serachInput "
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                  <button
                    className="btn btn-success circular-button"
                    onClick={handleclick}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <div className="weatherImg p-1">
                  <img src={cloud} alt="" /> br
                </div>
                <div className="d-flex justify-content-center">
                  <span className="text-success ">
                    {" "}
                    {Temp ? data.description : null}
                  </span>
                </div>

                <div className="p-2">
                  <div className="temp d-flex justify-content-center p-1 ">
                    <h3 className="font-weight-bold darkGreenText">
                      {Temp ? (data.temp - 273.15).toFixed(2) : null}°C
                    </h3>
                  </div>
                  <div className="temp d-flex justify-content-center  ">
                    <h4 className="lightGreenText">{city.toUpperCase()}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* for right div  */}

            <div className="col-md-6 shadow-sm  mb-5 bg-white rounded  mt-5 mb-5">
              <div className="row justify-content-center mt-2 mb-2">
                <div className="col-md-5 m-1">
                  <div class="card p-1 shadow-sm ">
                    <div class="card-body">
                      <h6>Temp Min</h6>{" "}
                      <span className="text-success">
                        {Temp ? (data.temp_min - 273.15).toFixed(2) : null} °C
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-5 m-1">
                  <div class="card p-1 shadow-sm">
                    <div class="card-body ">
                      <h6>Temp Max </h6>
                      <span className="text-success">
                        {Temp ? (data.temp_max - 273.15).toFixed(2) : null} °C
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-5 m-1">
                  <div class="card p- shadow-sm1">
                    <div class="card-body">
                      <h6>Humidity </h6>
                      <span className="text-success">{data.humidity} %</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-5 m-1">
                  <div class="card p-1 shadow-sm">
                    <div class="card-body">
                      <h6>Wind Speed </h6>
                      <span className="text-success">{data.wind} Km/h</span>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div class="card p-1">
                    <div class="card-body"><h6>Day Type </h6> </div>
                    <span className='text-success'>{data.temp_min}</span>
                  </div>
                </div> */}
              </div>
              <div className="row justify-content-center my-2">
                <div className="col-md-10">
                  <div class="card  p-1 shadow-sm">
                    <div class="card-body text-success text-center">
                      this is for next 10 days temperature
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="mt-5 text-center">
        <h2 className="mt-3 darkGreenText font-weight-bolder">
          Get Crop Information
        </h2>
        <div className="w-100 darkGreenbg mt-3 p-2 d-flex justify-content-around ">
          <div class="dropdown-container">
            <select class="custom-select" value={selectedState} onChange={handleStateChange}>
              <option value="">Select a State</option>
              {Object.keys(states).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div class="dropdown-container">
            <select class="custom-select" value={selectedCrop} onChange={handleCropChange}>
              <option value="">Select a Crop</option>
              {selectedState && states[selectedState].map((crop) => (
                <option key={crop} value={crop}>
                  {crop}
                </option>
              ))}
            </select>
          </div>
          <div class="dropdown-container">
            <input
              type="text"
              className="custom-select"
              placeholder="Search Crop details"
            />
          </div>
        </div>
        <div className="tableContent mt-2">
          <table class="table">
            <thead class="thead darkGreenbg">
              <tr>
                <th>Crop</th>
                <th>Suitable Season</th>
                <th>Weather Conditions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedCrop}</td>
                <td>{cropInfo.suitableSeason}</td>
                <td>{cropInfo.weatherConditions}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Weather;
