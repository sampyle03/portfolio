document.addEventListener("DOMContentLoaded", function () {
  // Show the loading icon initially
  const loadingIcon1 = document.getElementById("loading-icon1");
  const loadingIcon2 = document.getElementById("loading-icon2");
  loadingIcon1.style.display = "block";
  loadingIcon2.style.display = "block";

  // Loading icon 1 and 2 animation (one goes large while the other goes small)
  loadingIcon1.style.animation = "loading1 3.5s linear infinite";
  loadingIcon2.style.animation = "loading2 3.5s linear infinite";

  // Wait for the full page (images, etc.) to load
  window.addEventListener("load", function () {
      // Hide loading icon after 1 second
      setTimeout(function () {
          loadingIcon1.style.display = "none";
          loadingIcon2.style.display = "none";
          document.getElementById("body-main").style.display = "block";
      }, 1000);
  });
});


document.getElementById("nbl-home").addEventListener("click", function() {
    window.location.href = "/";
}
);

document.getElementById("nbr-about-me").addEventListener("click", function() {
    window.location.href = "/about-me";
}
);

document.getElementById("nbr-projects").addEventListener("click", function() {
    window.open("https://github.com/sampyle03", '_blank').focus();
}
);



const tags = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id !== 'bottom-gradient') {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

tags.forEach(tag => {
  observer.observe(tag);
});



const gradient = document.getElementById('bottom-gradient');
const removeGradient = () => {
  gradient.style.animation = "fadeout 1s linear";
  gradient.style.opacity = "0";
  gradient.style.pointerEvents = "none";
}

window.addEventListener('scroll', removeGradient);