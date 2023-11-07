import React, { useState } from "react";

const ZipCodeForm = ({ onSearch }) => {
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(zipCode);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter postal code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default ZipCodeForm;
