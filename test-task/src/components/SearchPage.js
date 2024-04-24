import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const SearchPage = ({showsData, defineDetails, defineSearchString, labelValue}) => {

const [inputValue, setInputValue] = useState("");


const getSearchResults = (searchString) => {
    setInputValue(searchString);
    defineSearchString(searchString)  
}

    return (
       <div className="Search-Page-Main-Container">
        <div className="Search-Page-Search-Bar-Wrap">
        <input className="Search-Page-Search-Bar" value={inputValue} onChange={(e) => getSearchResults(e.target.value)}></input>
        </div>
        
        <div className="Search-Page-Results-Container" >
        {inputValue.length > 1 && showsData.length > 0 ? 
        showsData.map((item) => 
            <Link className="Search-Page-Results-Block" to="/details" key={showsData.indexOf(item)} onClick={() => {defineDetails(item.show)}}>
                {item.show.image ? <img className="Search-Page-Results-Img" src={item.show.image.medium} alt={item.show.name}></img> : <p>No image</p>}
                <div className="Search-Page-Results-Text">
                    {item.show.name ? <p className="Search-Page-Results-Heading">{item.show.name}</p> : <p>No name</p>}
                    {item.show.rating.average ? <p>{item.show.rating.average}</p> : <p>Not rated</p>}
                </div>
        </Link>)
        :<p>{labelValue}</p>} 
       </div>
       </div> 
    )
}



export default SearchPage;


