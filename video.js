// Select all gallery videos
const videos = document.querySelectorAll('.gallery-item video');
const videoLightbox = document.querySelector('.lightbox');
const lightboxVideo = document.createElement('video');
const videoCloseBtn = document.querySelector('.close-btn');
const videoPrevBtn = document.querySelector('.prev');
const videoNextBtn = document.querySelector('.next');

let currentVideoIndex = 0; // Track the currently displayed video

// Set up lightbox video element
lightboxVideo.controls = true;
lightboxVideo.style.maxWidth = '90%';
lightboxVideo.style.maxHeight = '90%';
videoLightbox.appendChild(lightboxVideo);

// Function to open the video lightbox
function openVideoLightbox(index) {
    videoLightbox.style.display = 'flex';
    lightboxVideo.src = videos[index].src;
    currentVideoIndex = index;
    lightboxVideo.play(); // Play the video when opened
}

// Function to close the video lightbox
function closeVideoLightbox() {
    videoLightbox.style.display = 'none';
    lightboxVideo.pause(); // Pause the video when closing
    lightboxVideo.currentTime = 0; // Reset the video to the beginning
}

// Function to show the previous video
function showPrevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length; // Loop back to the last video
    lightboxVideo.src = videos[currentVideoIndex].src;
    lightboxVideo.play(); // Play the new video
}

// Function to show the next video
function showNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Loop back to the first video
    lightboxVideo.src = videos[currentVideoIndex].src;
    lightboxVideo.play(); // Play the new video
}

// Add event listeners for videos
videos.forEach((video, index) => {
    video.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent propagation
        openVideoLightbox(index);
    });
});

videoCloseBtn.addEventListener('click', closeVideoLightbox);
videoLightbox.addEventListener('click', closeVideoLightbox);
videoPrevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing the lightbox when clicking buttons
    showPrevVideo();
});
videoNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showNextVideo();
});
