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
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

tags.forEach(tag => {
  observer.observe(tag);
});