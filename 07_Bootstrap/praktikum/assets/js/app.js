// Scrolling Button
const scrollingBtn = document.querySelector(".scrolling-container");
window.addEventListener("scroll", () => {
	scrollingBtn.classList.toggle("active", window.scrollY > 200);
});
