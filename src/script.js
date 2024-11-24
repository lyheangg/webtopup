const mainContent = document.getElementById("main-content");
const menuBtn = document.getElementById("menu-btn");
const iconMenuBtn = document.getElementById("icon-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("-translate-y-full")) {
    mobileMenu.classList.remove("hidden");
    mainContent.classList.add("blur");
    mainContent.classList.add("opacity-25");
    setTimeout(() => {
      mobileMenu.classList.remove("-translate-y-full");
      mobileMenu.classList.add("translate-y-0");
    }, 10);
  } else {
    mobileMenu.classList.remove("translate-y-0");
    mobileMenu.classList.add("-translate-y-full");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
      mainContent.classList.remove("blur");
      mainContent.classList.remove("opacity-25");
    }, 300);
  }

  iconMenuBtn.classList.toggle("bi-list");
  iconMenuBtn.classList.toggle("bi-x");
});

// MENU Language Seletor
function toggleDropdown() {
  document.getElementById("dropdown-menu").classList.toggle("hidden");
}

function changeLanguage(path) {
  window.location.href = path;
}

// Close dropdown when clicking outside
window.onclick = function (event) {
  if (!event.target.matches("#menu-button")) {
    var dropdown = document.getElementById("dropdown-menu");
    if (!dropdown.classList.contains("hidden")) {
      dropdown.classList.add("hidden");
    }
  }
};
//Slide Show
const slides = document.querySelectorAll(".slideshow-image");
const slideshowTrack = document.getElementById("slideshow-track");
const paginationButtons = document.querySelectorAll('[id^="pagination-"]');
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  slideshowTrack.style.transform = `translateX(-${index * slideWidth}px)`;
  updatePagination(index);
}

function updatePagination(index) {
  paginationButtons.forEach((button, i) => {
    button.classList.toggle("bg-white", i === index);
    button.classList.toggle("bg-gray-800", i !== index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 3000);
}

function resetSlideshow() {
  clearInterval(slideInterval);
  startSlideshow();
}

// Event listeners for navigation buttons
document.getElementById("next-btn").addEventListener("click", () => {
  nextSlide();
  resetSlideshow();
});

document.getElementById("prev-btn").addEventListener("click", () => {
  prevSlide();
  resetSlideshow();
});

// Event listeners for pagination buttons
paginationButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
    resetSlideshow();
  });
});

// Initialize the slideshow
showSlide(currentIndex);
startSlideshow();

// Adjust the slideshow when the window is resized
window.addEventListener("resize", () => {
  showSlide(currentIndex);
});
