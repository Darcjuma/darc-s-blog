// JavaScript for basic interactivity

document.addEventListener("DOMContentLoaded", () => {
    // Alert button functionality
    const alertButton = document.getElementById("alertButton");

    if (alertButton) {
        alertButton.addEventListener("click", () => {
            alert("Button clicked! Welcome to My Website!");
        });
    }

    // Form submission handling
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevents page reload

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            console.log("Form submitted:", { name, email, message });
            alert("Thank you, " + name + ", your message has been received!");
            form.reset(); // Clear the form fields
        });
    }
});
