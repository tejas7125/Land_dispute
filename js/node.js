const express = require('express');
const fetch = require('node-fetch');
const app = express();

const sheetID = 'YOUR_SHEET_ID';
const apiKey = 'YOUR_API_KEY';

app.post('/login', async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Sheet1!A1:C100?key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        
        const rows = data.values;
        let loginSuccess = false;

        for (let i = 1; i < rows.length; i++) {
            const [sheetRole, sheetUsername, sheetPassword] = rows[i];
            if (sheetRole === role && sheetUsername === username && sheetPassword === password) {
                loginSuccess = true;
                break;
            }
        }

        if (loginSuccess) {
            res.status(200).send({ message: "Login Successful" });
        } else {
            res.status(401).send({ message: "Invalid Credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server Error" });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
