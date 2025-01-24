import axios from "axios";
import API_BASE_URL from "../config/apiConfig";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json", // Ensure the server knows you expect JSON
  },
});

export const getItems = async () => {
  try {
    const { data } = await apiClient.get("/api/bundles");
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const createItem = async (itemData) => {
  try {
    const response = await apiClient.post("/api/bundles", itemData);
    return response.data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};
