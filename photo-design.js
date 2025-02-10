// Select all gallery images
const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0; // Track the currently displayed image

// Function to open the lightbox
function openLightbox(index) {
    lightbox.style.display = 'flex';
    lightboxImage.src = images[index].src;
    currentIndex = index;
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Function to show the previous image
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
    lightboxImage.src = images[currentIndex].src;
}

// Function to show the next image
function showNext() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    lightboxImage.src = images[currentIndex].src;
}

// Add event listeners
images.forEach((image, index) => {
    image.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing the lightbox when clicking buttons
    showPrev();
});
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showNext();
});

