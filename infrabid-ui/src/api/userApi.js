import axios from './axios';

// Fetch user data
export const getUserData = async (userId) => {
    console.log('inside')
  try {
    const response = await axios.get(`/todos/1`);
    return response;  // Returns the mocked user data in development
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

