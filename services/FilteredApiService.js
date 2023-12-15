class FilteredApiService {
  constructor(apiService) {
    this.apiService = apiService;
  }

  makeRequest(query) {
    return this.apiService.makeRequest(query).then(response => {
      // Extract the data object from the response (the data object contains all the attributes)
      const data = response.data;
  
      // Filter the data to only include the attributes of interest
      return {
        weight: data.total_weight,
        length: data.length,
        towing_weight: data.towing_weight,
        model_year: data.model_year,
        brand: data.brand,
        model: data.model,
      };
    });
  }
}

module.exports = FilteredApiService;