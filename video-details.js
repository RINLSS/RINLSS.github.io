const videoContainer = document.querySelector('.video-container');
const videoDetails = document.querySelector('.video-details');

videoContainer.addEventListener('mouseover', () => {
  videoDetails.style.opacity = '1';
});

videoContainer.addEventListener('mouseout', () => {
  videoDetails.style.opacity = '0';
});
