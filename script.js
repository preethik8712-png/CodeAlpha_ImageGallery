const images = document.querySelectorAll(".image-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// Open lightbox
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

// Show selected image
function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

// Previous image
prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
});

// Next image
nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
});

// Close lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close when clicking outside image
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Keyboard support
document.addEventListener("keydown", (event) => {
    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {
            nextBtn.click();
        }

        if (event.key === "ArrowLeft") {
            prevBtn.click();
        }

        if (event.key === "Escape") {
            closeBtn.click();
        }
    }
});