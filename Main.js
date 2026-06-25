document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    if(form) {
        form.addEventListener("submit", function(event) {
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if(name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                event.preventDefault();
            }
        });
    }

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
    searchInput.addEventListener("keyup", function() {
        let filter = searchInput.value.toLowerCase();
        let cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {
            let text = card.textContent.toLowerCase();
            
            if(text.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
    }
});