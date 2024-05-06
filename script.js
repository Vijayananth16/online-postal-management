function showTrackingForm() {
    document.getElementById('trackingForm').style.display = 'block';
    document.getElementById('bookingForm').style.display = 'none';
}

function showBookingForm() {
    document.getElementById('bookingForm').style.display = 'block';
    document.getElementById('trackingForm').style.display = 'none';
}

function trackParcel() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    // Simulate tracking result (replace with real API call)
    const status = Math.random() < 0.5 ? 'In transit' : 'Delivered';
    document.getElementById('trackingResult').innerText = `Status: ${status}`;
}
