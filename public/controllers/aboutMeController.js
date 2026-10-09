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
          document.getElementById("body-main").style.display = "flex";
          document.getElementById("floatingDots").style.display = "block";

          /* if last thing on url is /projects, scroll to just below projects section */
          if (window.location.href.endsWith("/projects")) {
              const projectsSection = document.getElementById("projects");
              const scrollToPosition = projectsSection.offsetTop + projectsSection.offsetHeight - window.innerHeight + 20;
              window.scrollTo({
                  top: scrollToPosition,
                  behavior: "smooth"
              });
              
            };
      }, 10);
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
  const projectsSection = document.getElementById("projects");
  projectsSection.scrollIntoView({ behavior: "smooth" });
}
);




// Only observe elements that are part of the initial layout —
// collapsed (not-yet-shown) projects are excluded until expanded
const tags = document.querySelectorAll('.hidden:not(.projects-collapsed)');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id !== 'bottom-gradient') {
      entry.target.classList.add('show');
      entry.target.classList.remove('hidden');
    }
    if (!(entry.isIntersecting) && entry.target.id !== 'bottom-gradient') {
      entry.target.classList.remove('show');
      entry.target.classList.add('hidden');
    }
  });
}, {
  threshold: 0.06,
  rootMargin: '62% 0px -27% 0px'
});

tags.forEach(tag => {
  observer.observe(tag);
});



const gradient = document.getElementById('bottom-gradient');
const removeGradient = () => {
  gradient.style.animation = "fadeout 0.6s linear";
  gradient.style.opacity = "0";
  gradient.style.pointerEvents = "none";
}

window.addEventListener('scroll', removeGradient);




// ---- Show More Projects expansion logic ----

const toggleBtn = document.getElementById("projects-toggle");
const emptyBeforeToggle = document.getElementById("empty-before-toggle");
const newSecondFromBottom = document.getElementsByClassName("second-from-bottom-project")[1];
const moreProjects = [
  document.getElementById("plm-7"),
  document.getElementById("plm-8"),
  newSecondFromBottom,
  document.getElementById("plm-9"),
];

function expandProjects() {
  // Start fading out the button and its placeholder
  toggleBtn.classList.add("fade-out");
  emptyBeforeToggle.classList.add("fade-out");
  toggleBtn.setAttribute("aria-expanded", "true");

  toggleBtn.addEventListener("transitionend", function handler(e) {
    // only react once, to the opacity transition on the button itself
    if (e.target !== toggleBtn) return;
    toggleBtn.removeEventListener("transitionend", handler);

    // Pull the toggle and its spacer out of grid flow completely
    toggleBtn.style.display = "none";
    emptyBeforeToggle.style.display = "none";

    newSecondFromBottom.style.display = "flex";


    // Reveal the rest of the projects — they'll now sit where
    // the toggle/placeholders used to be
    moreProjects.forEach((p, i) => {
      // Re-enter grid flow (still visually hidden via .hidden class)
      p.classList.remove("projects-collapsed");

      setTimeout(() => {
        p.classList.remove("hidden");
        p.classList.add("show");
        observer.observe(p); // start observing now that it's part of the layout
      }, i * 80); // slight stagger looks nicer than all-at-once
    });
  });
}

toggleBtn.addEventListener("click", expandProjects);
toggleBtn.addEventListener("keydown", function(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    expandProjects();
  }
});




// Floating dots animation
const generateFloatingDots = () => {

    const canvas = document.getElementById("floatingDots");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = [];

    for (let i = 0; i < 100; i++) {
      dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "lightgrey";
      for (const dot of dots) {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 1.1);
          ctx.fill();

          dot.x += dot.dx;
          dot.y += dot.dy;

          // Bounce off edges
          if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
          if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
      }
      requestAnimationFrame(draw);
    }

    draw();

    // Resize on window change
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
}

generateFloatingDots();


document.getElementById("plm-1").getElementsByClassName("project-learn-more-button")[0].addEventListener("click", function() {
  /* open github link in new tab */
  window.open("https://fundingawards.nihr.ac.uk/award/NIHR207227", '_blank').focus();
}
);

document.getElementById("plm-2").getElementsByClassName("project-learn-more-button")[0].addEventListener("click", function() {
  window.open("https://www.dawnbreakagency.co.uk/", '_blank').focus();
}
);

document.getElementById("plm-3").getElementsByClassName("project-learn-more-button")[0].addEventListener("click", function() {
  window.open("https://github.com/sampyle03/fake-news-detector", '_blank').focus();
}
);

// document.getElementById("plm-4").getElementsByClassName("project-learn-more-button")[0].addEventListener("click", function() {
//   window.open("", '_blank').focus();
// }
// );

document.getElementById("plm-5").getElementsByClassName("project-learn-more-button")[0].addEventListener("click", function() {
  window.open("https://github.com/sampyle03/ueauction", '_blank').focus();
}
);

// document.getElementById("plm-6").getElementsByClassName("project-learn-more-button")[0].addEventListener("click", function() {
//   window.open("", '_blank').focus();
// }
// );

document.getElementById("plm-7").getElementsByClassName("project-learn-more-button")[0].addEventListener("click", function() {
  window.open("https://github.com/sampyle03/portfolio", '_blank').focus();
}
);

document.getElementById("plm-8").getElementsByClassName("project-learn-more-button")[0].addEventListener("click", function() {
  window.open("https://github.com/sampyle03/info-retrieval", '_blank').focus();
}
);

// document.getElementById("plm-9").getElementsByClassName("project-learn-more-button")[0].addEventListener("click", function() {
//   window.open("", '_blank').focus();
// }
// );