import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import { useDebounce } from "@uidotdev/usehooks";

import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';



const App = () => {

  const [showsData, setShowsData] = useState([]);

  const [details, setDetails] = useState([]);

  const [validSearchString, setValidSearchString] = useState("");

  const debouncedValidSearchString = useDebounce(validSearchString, 300);

  const [labelValue, setLabelValue] = useState("Type the show`s name");


  useEffect(() => {
      if (debouncedValidSearchString.length < 2) {
          setLabelValue("Type the show`s name");
      } else {
          fetchShowList(debouncedValidSearchString);
          if (showsData.length === 0) {
              setLabelValue("Sorry, nothing found with this search");    
          }
      }
}, [debouncedValidSearchString, showsData]);


const fetchShowList = (value) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
  .then((response) => response.json())
  .then((json) => 
  
     {
        json.length !== 0 ? setShowsData(json) : setShowsData([]) 
     }

)
  .catch(error => console.error(error))
}

const defineDetails = (chosenShowItem) => {
  setDetails(chosenShowItem);
}

const defineSearchString = (string) => {
  setValidSearchString(string)
}
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<SearchPage labelValue={labelValue} showsData={showsData} defineDetails={defineDetails} 
        defineSearchString={defineSearchString} />} />
        <Route path="/details" element={<DetailsPage details={details} />} />
      </Routes> 
    </div>
  );
}

export default App;
