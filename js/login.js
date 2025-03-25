// Google Sheets API Configuration
const sheetID = "1KtcPNpGObi8SGUiwMIXXaUNTcdQrbbbO6hip87FMULo"; // Google Sheets का आईडी यहाँ डालें
const apiKey = "AIzaSyAPJhkut3qE8eyBJcdxRzEFg7caqzeGhGs";  // API Key यहाँ डालें
const sheetName = "Login"; // Google Sheet का नाम

// Login Form Submission Logic
document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // फॉर्म रीलोडिंग को रोकें

    // Form Inputs
    const role = document.getElementById("role").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!role || !username || !password) {
        alert("कृपया सभी जानकारी प्रदान करें।");
        return;
    }

    try {
        // Fetch Data from Google Sheets
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}!A1:C100?key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        const rows = data.values;

        // Validate Login Credentials
        let loginSuccess = false;
        for (let i = 1; i < rows.length; i++) {
            const [sheetRole, sheetUsername, sheetPassword] = rows[i];
            if (sheetRole === role && sheetUsername === username && sheetPassword === password) {
                loginSuccess = true;
                break;
            }
        }

        if (loginSuccess) {
            if (role === "station") {
                alert(`थाना स्तर पर लॉगिन सफल! स्वागत है, ${username}!`);
                window.location.href = "dashboard.html"; // Redirect to Station Dashboard
            } else if (role === "officer") {
                alert(`अधिकारी स्तर पर लॉगिन सफल! स्वागत है, ${username}!`);
                window.location.href = "dashboard_officer.html"; // Redirect to Officer Dashboard
            }
        } else {
            alert("लॉगिन असफल! कृपया सही जानकारी प्रदान करें।");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("सर्वर से डेटा प्राप्त करने में समस्या हो रही है। कृपया पुनः प्रयास करें।");
    }
});
