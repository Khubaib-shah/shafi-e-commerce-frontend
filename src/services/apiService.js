import axios from "axios";
import API_BASE_URL from "../config/apiConfig";
/**
 * Updates an existing bundle.
 *
 * @param {Object} itemData - The data of the item to update.
 * @param {string} itemData._id - The unique identifier of the item.
 * @param {string} itemData.supplier - The supplier name.
 * @param {number} itemData.cost - The cost of the item.
 * @param {string} itemData.status - The status of the item.
 * @returns {Object} The updated item data.
 * @throws Will throw an error if the update fails.
 */
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
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

export const getItemById = async (id) => {
  try {
    const { data } = await apiClient.get(`/api/bundles/${id}`);
    const { _id, supplier, quantity, cost, status, receivedAt, __v } = data;
    return { _id, supplier, quantity, cost, status, receivedAt, __v };
  } catch (error) {
    console.error(`Error fetching item with id ${id}:`, error);
    throw error;
  }
};
export const DeleteById = async (id) => {
  try {
    await apiClient.delete(`/api/bundles/${id}`);
    console.log("Deleted successfully");
  } catch (error) {
    console.error(`Error deleting item with id: ${id}`, error);
    throw error;
  }
};

export const updateItem = async (itemData) => {
  const { _id, supplier, cost, status } = itemData;

  // Basic validation
  if (!_id || !supplier || cost === undefined || !status) {
    throw new Error("Missing required item data fields.");
  }

  try {
    const response = await apiClient.put("/api/bundles", itemData);
    return response.data;
  } catch (error) {
    console.error("Error updating bundle:", error);
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
