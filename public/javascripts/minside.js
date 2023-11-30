async function fetchData() {
    const apiKey = 'lOWUQnlPUqEdChpAwjOfvs7xyeIVdTWiDWvdsKmR5Orr3dudJ9Nrzj6cOAhYlmjJ';
    const licensePlate = document.getElementById('licensePlate').value.trim();
    const apiUrl = `https://api.synsbasen.dk/v1/vehicles/registration/${licensePlate}`;

    // test kode for JSON, V1 minus Kameli + Synsbasen - virk

    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      const vehicleInfoDiv = document.getElementById('vehicleInfo');
      vehicleInfoDiv.innerHTML = ''; // Clear previous results

      const vehicleDetails = document.createElement('p');
      vehicleDetails.textContent = JSON.stringify(data, null, 2);
      vehicleInfoDiv.appendChild(vehicleDetails);
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
    }
  }