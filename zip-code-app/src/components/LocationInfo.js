import React from "react";

const LocationInfo = ({ location, clearLocation }) => {
  return (
    <div>
      {location ? (
        <div>
          <h2>Location Information</h2>
          <p>Post Code: {location.postCode}</p>
          <p>Country: {location.country}</p>
          <p>State: {location.state}</p>
          <p>State Abbreviation: {location.stateAbbreviation}</p>
          <p>Place Name: {location.placeName}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Latitude: {location.latitude}</p>
          <button onClick={clearLocation}>Clear</button>
        </div>
      ) : (
        <p>No information to display.</p>
      )}
    </div>
  );
};

export default LocationInfo;
