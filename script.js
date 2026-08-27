const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const video = document.querySelector('video');
const placeholder = document.querySelector('.video-placeholder');

if (video && placeholder) {
  video.addEventListener('loadeddata', () => placeholder.style.display = 'none');
  video.addEventListener('error', () => placeholder.style.display = 'flex');
}
