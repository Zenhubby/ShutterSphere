function showLogoutConfirmation() {
    document.getElementById("logout-confirmation-modal").style.display = "block";
}

function hideLogoutConfirmation() {
    document.getElementById("logout-confirmation-modal").style.display = "none";
}

function logout() {
    console.log("Logged out successfully!");
    hideLogoutConfirmation();
}