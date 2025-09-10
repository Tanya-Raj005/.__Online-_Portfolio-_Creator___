// Small interactivity for project buttons
document.querySelectorAll(".view-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(`You clicked "View" on ${btn.previousElementSibling.innerText}`);
  });
});

console.log("Portfolio loaded successfully!");
