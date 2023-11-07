const API_URL = "https://api.zippopotam.us/in/";

export const fetchLocationInfo = async (zipCode) => {
  try {
    const response = await fetch(`${API_URL}${zipCode}`);
    if (!response.ok) {
      throw new Error("Failed to fetch location information");
    }

    const data = await response.json();

    if (data.places && data.places.length > 0) {
      const place = data.places[0]; // Assuming you want information from the first place in the list
      return {
        postCode: data["post code"],
        country: data.country,
        state: place.state,
        stateAbbreviation: place["state abbreviation"],
        placeName: place["place name"],
        longitude: place.longitude,
        latitude: place.latitude,
      };
    } else {
      throw new Error("No location information available for this postal code.");
    }
  } catch (error) {
    throw error;
  }
};
