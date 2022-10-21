const navbarContainer = document.querySelector(".nav-container");
const scrollingBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
	navbarContainer.classList.toggle("active", window.scrollY > 100);
	scrollingBtn.classList.toggle("active", window.scrollY > 200);
});

// Contact Us
const form = document.querySelector("#contact-form");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");

const handleSubmit = (event) => {
	event.preventDefault();

	let inputFirstName = firstName.value;
	let inputLastName = lastName.value;
	let inputEmail = email.value;
	let inputMessage = message.value;

	alert(`
    Name: ${inputFirstName} ${inputLastName} 
    Email: ${inputEmail} 
    Message: ${inputMessage}

    Thank you for submitting the form.
    `);

	form.reset();
};
