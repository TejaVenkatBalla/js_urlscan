function scanUrl() {
    const url = document.getElementById('url-input').value;
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'x-apikey': 'ee9a95de89da158a7983bfe95d3f54d5027a0f951d4b16ab0438bb04e25285f6',
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({ url: url })
    };
  
    fetch('https://cors-anywhere.herokuapp.com/https://www.virustotal.com/api/v3/urls', options)
      .then(response => response.json())
      .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = JSON.stringify(data, null, 2);
      })
      .catch(err => console.error(err));
  }
  
