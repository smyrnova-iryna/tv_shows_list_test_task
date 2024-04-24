import React from 'react';

const DetailsPage = ({details}) => {

    const tagSymbols = /(<([^>]+)>)/ig;

    return (
       <div className="Details-Page-Main-Container">
        <p className="Details-Page-Heading">{details.name}</p>
        {details.image ? 
        details.image.original ? <img className="Details-Page-Img" src={details.image.original} alt={details.name}></img>
        : <img className="Details-Page-Img" src={details.image.medium} alt={details.name}></img>
        : <p>No image</p>}
        <div className="Details-Page-Content-Wrapper">
            {details.genres ? 
            <ul className="Details-Page-Genres-List">
                {details.genres.map((item) => 
                    <li key={details.genres.indexOf(item)}>{item}</li>
                )}
            </ul> 
             : "No genres provided"
            }
            {details.url ? <a className="Details-Page-Link" rel="noreferrer" target='_blank' href={details.url}>Watch</a> : <p>No link provided</p>}
            {details.rating.average ? <p><span className="Details-Page-Inner-Heading">Rating: </span>{details.rating.average}</p>
             : <p>Not rated</p>}
            {details.status ? <p><span className="Details-Page-Inner-Heading">Status: </span>{details.status}</p> : <p>Unknown</p>}
            {details.schedule.days ?
                <p>
                <span className="Details-Page-Inner-Heading">Schedule: </span>on {details.schedule.days.map((item) => <span key={details.schedule.days.indexOf(item)}>{item}</span>)}
                {details.schedule.time ? <span>, at {details.schedule.time}</span> : <></>}
                </p> 
                : <p>Schedule unset</p>
            }
        </div>
        
        {details.summary ? <p className="Details-Page-Summary">{details.summary.replace(tagSymbols, "")}</p> : <p>No summary provided</p>}
       </div> 
    )
}

export default DetailsPage;

