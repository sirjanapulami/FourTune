function openBookingPopup() {
    if (document.getElementById("bookingOverlay")) {
        document.getElementById("bookingOverlay").style.display = "flex";
        return;
    }
    
    const overlay = document.createElement("div");
    overlay.className = "booking-overlay";
    overlay.id = "bookingOverlay";

    overlay.innerHTML = `
        <div class="booking-popup">
            <span class="popup-close" onclick="closeBookingPopup()">&times;</span>
            <h2>Decoration Booking</h2>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" id="popupName">
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" id="popupEmail">
            </div>

            <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" id="popupPhone">
            </div>

            <div class="form-group">
                <label>Event Date</label>
                <input type="date" id="popupDate">
            </div>

            <div class="form-group">
                <label>Event Location</label>
                <input type="text" id="popupLocation">
            </div>

            <div class="form-group">
                <label>Special Requirements</label>
                <textarea id="popupMessage"></textarea>
            </div>

            <button class="popup-book-btn" onclick="submitPopupBooking()">Confirm Booking</button>

            <div class="popup-success" id="popupSuccessMsg"></div>
        </div>
    `;

    document.body.appendChild(overlay);
    overlay.style.display = "flex";

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        if (user.name) document.getElementById("popupName").value = user.name;
        if (user.email) document.getElementById("popupEmail").value = user.email;
        if (user.phone) document.getElementById("popupPhone").value = user.phone;
    }
}

function closeBookingPopup() {
    document.getElementById("bookingOverlay").style.display = "none";
}

function submitPopupBooking() {

    const name = document.getElementById("popupName").value;
    const email = document.getElementById("popupEmail").value;
    const phone = document.getElementById("popupPhone").value;
    const date = document.getElementById("popupDate").value;
    const location = document.getElementById("popupLocation").value;

    if (!name || !email || !phone || !date || !location) {
        alert("Please fill all required fields!");
        return;
    }

    document.getElementById("popupSuccessMsg").innerText = "Booking Successful!";
    alert("Booking Successful!")

    // Clear non-user fields
    document.getElementById("popupDate").value = "";
    document.getElementById("popupLocation").value = "";
    document.getElementById("popupMessage").value = "";

    closeBookingPopup();
}