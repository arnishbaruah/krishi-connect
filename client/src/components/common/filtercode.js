// function Search() {
//     const [query, setQuery] = useState('');
//     const mockData = [
//       { name: 'Apple' },
//       { name: 'Banana' },
//       { name: 'Cherry' },
//       { name: 'Date' },
//       { name: 'Elderberry' },
//       { name: 'Fig' },
//       // Add more data as needed
//     ];
  
//     const handleSearch = (searchTerm) => {
//       setQuery(searchTerm);
//     };
  
//     const filteredData = mockData.filter((item) =>
//       item.name.toLowerCase().includes(query.toLowerCase())
//     );
  
//     return (
//       <div>
//         <SearchInput
//           className="search-input"
//           onChange={handleSearch}
//           placeholder="Search..."
//         />
//         <ul>
//           {filteredData.map((result, index) => (
//             <li key={index}>{result.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
  
//   export default Search;
  









import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const mockData = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Cherry' },
    { name: 'Date' },
    { name: 'Elderberry' },
    { name: 'Fig' },
    // Add more data as needed
  ];

  const performSearch = (query) => {
    // Mock search logic: Filter data based on the query
    return mockData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleInputChange = (e) => {
    const inputQuery = e.target.value;
    setQuery(inputQuery);

    // Perform the search and update the results
    const searchResults = performSearch(inputQuery);
    setResults(searchResults);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
