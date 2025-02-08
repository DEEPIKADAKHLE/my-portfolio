// Function to show the certificate modal
function showCertificate() {
    document.getElementById("certificateModal").style.display = "flex";
}

// Function to close the certificate modal
function closeCertificate() {
    document.getElementById("certificateModal").style.display = "none";
    document.getElementById("closeModalButton").addEventListener("click", closeCertificate);

}

