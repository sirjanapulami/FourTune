function openBookingPopup() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return window.location.href = "/pages/login.html"

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

    document.getElementById("popupName").value = user.name;
    document.getElementById("popupEmail").value = user.email;
    document.getElementById("popupPhone").value = user.phone;
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
    const message = document.getElementById("popupMessage").value;
    const productName = document.getElementById("name").innerText;
    const productPrice = document.getElementById("name").innerText;
    const productImg = document.getElementById("img").src;

    if (!name || !email || !phone || !date || !location) {
        alert("Please fill all required fields!");
        return;
    }

    const booking = {
        productName: productName,
        productPrice: productPrice,
        productImg: productImg,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        eventDate: date,
        eventLocation: location,
        specialRequirements: message
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    document.getElementById("popupSuccessMsg").innerText = "Booking Successful!";
    alert("Booking Successful!");

    // Clear non-user fields
    document.getElementById("popupDate").value = "";
    document.getElementById("popupLocation").value = "";
    document.getElementById("popupMessage").value = "";

    closeBookingPopup();
}