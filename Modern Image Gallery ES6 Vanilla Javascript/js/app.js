const current = document.querySelector('#current');  // big container image
const imgs = document.querySelectorAll('.imgs img');  // grab all images from .imgs
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // Change current image to src of clicked image
    current.src = e.target.src;

    // Add fade in Class
    current.classList.add('fade-in');

    // Remoove fade-in class after .5 seconds

    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity to opacity var
    e.target.style.opacity = opacity;

}

/* 
For each imgs, we want to grab the img and add an event listener that tells us that when we CLICK an image, we want to make a function happen: imgClick.
We declare a function and call it imgClick with a parameter of (e). Inside it we want to get the current src and set it equal to the parameter of e that when clicked on a targeted image, will change the big container image when clicked.
*/
