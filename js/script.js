// Login form submission logic
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Form को रीलोड होने से रोकें

    // Form के डेटा प्राप्त करें
    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate inputs
    if (!role || !username || !password) {
        alert("कृपया सभी आवश्यक जानकारी प्रदान करें।");
        return;
    }

    // Role-based login processing
    if (role === "station") {
        // थाना स्तर का लॉगिन
        alert(`थाना स्तर पर लॉगिन सफल! स्वागत है, ${username}!`);
        // Redirect to station dashboard (थाना डैशबोर्ड पेज)
        window.location.href = "dashboard_station.html";
    } else if (role === "officer") {
        // अधिकारी स्तर का लॉगिन
        alert(`अधिकारी स्तर पर लॉगिन सफल! स्वागत है, ${username}!`);
        // Redirect to officer dashboard (अधिकारी डैशबोर्ड पेज)
        window.location.href = "dashboard_officer.html";
    } else {
        alert("अमान्य रोल चयन।");
    }
});
