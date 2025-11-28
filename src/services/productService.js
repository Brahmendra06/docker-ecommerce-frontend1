import axios from "axios";

const API_BASE_URL = "http://localhost:8081/api/products";

// Fetch products by category
export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Get product image URL
export const getProductImageUrl = (imagePath) => {
  return `${API_BASE_URL}/images/${imagePath}`;
};
