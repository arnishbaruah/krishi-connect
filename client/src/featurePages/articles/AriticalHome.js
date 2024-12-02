import React , {useEffect ,useState} from 'react'
import ArticalsCard from '../../components/articals/ArticalsCard'
import NavigationBar from "../../components/CommonNavigation";
import {getData} from "../../api/utilityAPI"
import ArticalsForm from '../../components/articals/ArticalsForm';
export default function AriticalHome() {
  const [ArticalData, setArticalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataFromChild, setDataFromChild] = useState('');
  const [query, setQuery] = useState('');
  const [filterRecords, setFilterRecords] = useState([]);
  
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };
  const fetchData = async()=>{
    const res  = await getData();
    
    setArticalData(res.data.data)
    setFilterRecords(res.data.data)
    setLoading(false);
    
  }
  useEffect(()=>{
    fetchData()
  },[dataFromChild])
  

  // const handleInputChange = (e) => {
  //   const inputQuery = e.target.value;
  //   setQuery(inputQuery);

  //   // Perform the search and update the results
  //   const searchResults = performSearch(inputQuery);
  //   setArticalData(searchResults)
  // };
 
  const handleInputChange = (event) => {
    const filterText = event.target.value.toLowerCase();
  
    if (filterText === 'all') {
      // If the search query is "all," set the articalData to the original data
      setArticalData(filterRecords);
    } else {
      // Otherwise, filter the records based on the search query
      const newData = filterRecords.filter(row => 
        row.title.toLowerCase().includes(filterText) || 
        row.thumbnaiText.toLowerCase().includes(filterText) ||
        row.category.toLowerCase().includes(filterText)
      );
  
      setArticalData(newData);
    }
  }
  

  return (
    <>
    
    <NavigationBar/>
    <ArticalsForm sendDataToParent={handleDataFromChild}/>
    <div className="container  justify-content-center lightGreenbg" style={{ marginTop: "85px" }}>
   
    <div className=" filtar-bar w-100 darkGreenbg mt-3 m-0  d-flex justify-content-center ">
        
          <div class="dropdown-container text-justify" style={{width:"40%"}}>
            <select class="custom-select text-justify" id="categorySelect"  onChange={handleInputChange} >-
              <option value="all" className='text-justify'>All</option>
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
          <div class="dropdown-container " style={{width:"40%"}}>
            <input
              type="text"
              className="custom-select"
              placeholder="&#128269; Search Artical details"
              onChange={handleInputChange}
            />
          </div>
        </div>

    {loading ? (
            <div className="spinner-border text-success d-flex justify-content-center " role="status">
              <span className="sr-only"></span>
            </div>
          ) :(
        <div class="row  row-cols-1 row-cols-md-3">   
    {ArticalData.map((article) => (
      <ArticalsCard key={article._id} data = {article}/>
      ))}
      
      </div>
          )}
      </div>
   

    <ul>
        
      </ul>
    </>
  )
}
