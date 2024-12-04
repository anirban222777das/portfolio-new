// Select the dark mode toggle button
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Check localStorage to see if dark mode is enabled
const currentTheme = localStorage.getItem("darkMode");

// Apply the saved theme on page load
if (currentTheme === "enabled") {
  document.body.classList.add("dark-mode");
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
  // Toggle the dark mode class on the body
  document.body.classList.toggle("dark-mode");

  // Save the theme state to localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }

  // Update the dark mode toggle button text
  darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
});

// Function for hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
