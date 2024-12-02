import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const customStyles = {
  rows: {
    style: {
      // override the row height
      minHeight: '48px'
    },
  },
  headRow: {
    style: {
      backgroundColor: '#1c8c59',
    }
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "600",
      textTransform: "uppercase",
      borderStyle: 'solid',
      borderWidth: '1px',
      color: 'white'
    }
  },
  cells: {
    style: {
      fontSize: "15px",
      wordBreak: 'break-word',
      borderStyle: 'solid',
      borderWidth: '1px',
      color: '#1c8c59'
    }
  }
};

function Table1() {
  const columns = [
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true
    },
    {
      name: "APMC's",
      selector: (row) => row.market,
      sortable: true
    },
    {
      name: "Commodity",
      selector: (row) => row.commodity,
      sortable: true
    },
    {
      name: "Min Price",
      selector: (row) => row.min_price,
      sortable: true
    },
    {
      name: "Max Price",
      selector: (row) => row.max_price,
      sortable: true
    },
    {
      name: "Date",
      selector: (row) => row.arrival_date,
      sortable: true
    }
  ];

  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.data.gov.in/catalog/6141ea17-a69d-4713-b600-0a43c8fd9a6c?api-key=579b464db66ec23bdd000001f16618afa7a64b336d32ea6fd86c3b50&format=json&limit=1000');
        setRecords(response.data.records);
        setFilterRecords(response.data.records);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (event) => {
    const filterText = event.target.value.toLowerCase();
  
    const newData = filterRecords.filter(row => 
      row.commodity.toLowerCase().includes(filterText) || 
      row.market.toLowerCase().includes(filterText) ||
      row.state.toLowerCase().includes(filterText)
    );
  
    setRecords(newData);
  }

  return (
    <div style={{ padding: "7% 7%", backgroundColor: "white", backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png");', color: "#1c8c59" }}>
      <div style={{ display: "flex", justifyContent: "left", padding: "0.2% 0.2% " }}>
        <input type='text' className="border-bottom border-success mb-3 bg-white custumShadow p-2 px-2 inputField text-center" style={{ width: "270px" }} onChange={handleFilter} placeholder='Search APMC Market Price' />
      </div>
      <DataTable columns={columns} data={records} customStyles={customStyles} pagination style={{ color: "#1c8c59" }} />
    </div>
  );
}

export default Table1;
