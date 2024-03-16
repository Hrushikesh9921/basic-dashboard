document.addEventListener("DOMContentLoaded", function() {
    fetch('http://192.168.68.117:1111/fetchsheedata')
        .then(response => response.json())
        .then(data => {
            // Assuming the response data is a string or can be converted to string
            document.getElementById('apiResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('apiResponse').innerText = 'Failed to load data.';
        });
});