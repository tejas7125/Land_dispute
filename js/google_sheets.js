// Sample function to fetch data from Google Sheets
const apiKey = 'YOUR_API_KEY';
const sheetID = 'YOUR_SHEET_ID';

function fetchData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Sheet1!A1:D100?key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.values); // Process data here
        })
        .catch(error => console.error('Error fetching data:', error));
}
fetchData();
