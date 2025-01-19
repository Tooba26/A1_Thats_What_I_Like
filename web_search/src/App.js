import React, { useState } from "react";
import SearchBox from "./Components/searchbox";
import axios from "axios";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async (query) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/search", { query });
      setResults(response.data.results);
      setQuery(query);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="flex justify-center min-h-[100vh] bg-[#EDE8DC]">
      
      <div className="w-full ">
      
      <div className="p-4 bg-[#000B58] text-white w-100">
      <div className="flex justify-between items-center mx-2">
        <div>
          Natural Languge Processing
        </div>
      
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">A1_That's What_I_Like</h1>
        </div>

        <div>
          Tooba Mehboob-st125404
        </div>
      </div>

      </div>
      
      <div className="mt-4">
        <div>
          <h1 className="text-xl font-bold mb-4 text-center">Search Context</h1>
        </div>

        <div>
            <SearchBox onSearch={handleSearch} />
            {results.length > 0 && (
              <div className="flex flex-col justify-center items-center mt-4">
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-center">Top Results for "{query}"</h2>
                </div>

                <div className="">
                <ul>
                  {results.map((result, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                      {result.text} (Score: {result.score.toFixed(2)})
                    </li>
                  ))}
                </ul>

                </div>
                
              </div>
          )}

        </div>

        <div className="w-full absolute bottom-0">
          <footer className="bg-[#000B58] text-white text-center p-4">Asian Institute of Technology</footer>
        </div>

      </div>
        
      
    </div>
    </div>
    
  );
};

export default App;
