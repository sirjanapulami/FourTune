document.addEventListener("DOMContentLoaded", function () {

                const authItem = document.getElementById("authItem");
                const user = JSON.parse(localStorage.getItem("user"));

                const bookingLink = document.getElementById("booking-link");
                if (user) {
                    authItem.innerHTML = `
                        <button class="login" onclick="logoutUser()">Logout →</button>
                    `;
                    bookingLink.innerHTML = `
                    <li><a href="/pages/bookings.html">My Bookings</a></li>
                    `
                }
            });

            function logoutUser() {
                localStorage.removeItem("user");
                location.reload();
            }