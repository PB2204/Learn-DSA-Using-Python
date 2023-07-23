// Function to update the recipient's name dynamically
function updateRecipientName() {
    const recipientNameElement = document.getElementById('recipientName');
    const recipientNameInput = prompt('Enter the recipient\'s name:');
    if (recipientNameInput) {
        recipientNameElement.textContent = recipientNameInput;
    }
}

// Function to generate and download the certificate as a PDF
function downloadCertificate() {
    const certificate = document.querySelector('.certificate');
    const opt = {
        margin: 0,
        filename: 'certificate.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(certificate).set(opt).outputPdf().then((pdf) => {
        pdf.save();
    });
}

// Event listener to update recipient's name
document.getElementById('generateCertificate').addEventListener('click', updateRecipientName);

// Event listener to generate and download the certificate as PDF
document.getElementById('generateCertificate').addEventListener('click', downloadCertificate);
