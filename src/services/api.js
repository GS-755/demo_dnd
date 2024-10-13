import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchMotels = async () => {
  try {
    const response = await axios.get(`${API_URL}/motels`);
    console.log("API Response:", response); // Log the entire response

    if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else if (response.data) {
      console.log("Response data structure:", response.data);
      return response.data.rooms || [];
    } else {
      throw new Error("No data received from the API");
    }
  } catch (error) {
    console.error("Error fetching motel data:", error);
    throw error;
  }
};
