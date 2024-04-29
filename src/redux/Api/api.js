// api.js

import axios from 'axios';

const callAPI = async ({ url, method, data }) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: data,
    });

    return response; // Return the data from the response
  } catch (error) {
    throw new Error(error.response.data); // Throw an error with the response data
  }
};



export { callAPI };