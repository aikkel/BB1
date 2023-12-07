const axios = require('axios');

class ApiService {
  constructor(apiUrl, apiKey) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  announce() {
    console.log('Announcement from Advert class');
  }

 async makeRequest(endpoint) {
  try {
    const response = await axios.get(`${this.apiUrl}/${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    }
  }
}

module.exports = ApiService;
