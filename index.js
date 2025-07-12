const button = document.querySelector('.social-media-links');
const socialLinks = document.querySelector('.social-links');

button.addEventListener('click', ()=> {
  if (socialLinks.style.visibility === 'visible') {
    socialLinks.style.visibility = 'hidden';
    
  } else {
    socialLinks.style.visibility = 'visible';
  }
})