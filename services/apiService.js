const axios = require('axios');

class ApiService {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  makeRequest(query) {
    return axios.get(`${this.baseUrl}/${query}`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    })
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Received status code ${response.status}`);
      }
    })
    .catch(error => {
      console.error('Failed to make request to the API:', error);
      throw error;
    });
  }

  testConnection() {
    console.log('Testing connection to the API...');
  
    return axios.get(this.baseUrl, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    })
    .then(response => {
      console.log('Received response from API:', response.status);
      if (response.status === 200) {
        return true;
      } else {
        throw new Error(`Received status code ${response.status}`);
      }
    })
    .catch(error => {
      console.error('Failed to connect to the API:', error);
      return false;
    });
  }
}

module.exports = ApiService;