import axios from "axios";

// Correct base URL for Docker backend
const CART_API_URL = "http://localhost:8081/api/cart";

// Add to cart
// You are currently calling addToCart(product.id),
// so we make productId the first argument and default userId for now.
export const addToCart = async (productId, userId = 1) => {
  return await axios.post(`${CART_API_URL}/add`, {
    userId,
    productId,
    quantity: 1,
  });
};

// Get all cart items for a user
export const getCartItems = async (userId = 1) => {
  const response = await axios.get(`${CART_API_URL}/user/${userId}`);
  return response.data;
};

// Clear cart for user
export const clearCartApi = async (userId = 1) => {
  return await axios.delete(`${CART_API_URL}/clear/${userId}`);
};

// Remove a specific cart item
export const removeCartItem = async (cartItemId) => {
  try {
    await axios.delete(`${CART_API_URL}/remove/${cartItemId}`);
  } catch (error) {
    console.error("Error removing item from cart", error);
  }
};
