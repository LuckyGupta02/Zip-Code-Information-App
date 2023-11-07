import React, { useState } from "react";
import ZipCodeForm from "./components/ZipCodeForm";
import LocationInfo from "./components/LocationInfo";
import { fetchLocationInfo } from "./api";

function App() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (zipCode) => {
    try {
      clearLocation(true);
      setLoading(true);
      const data = await fetchLocationInfo(zipCode);
      setLocation(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const clearLocation = () => {
    setLocation(null);
    setError(null);
  };

  return (
    <div className="App">
      <h1>Zip Code Information App</h1>
      <ZipCodeForm onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <LocationInfo location={location} clearLocation={clearLocation} />
    </div>
  );
}

export default App;
