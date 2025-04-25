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
          document.getElementById("floatingDots").style.display = "block";

          /* if last thing on url is /projects, scroll to just below projects section */
          if (window.location.href.endsWith("/projects")) {
              const projectsSection = document.getElementById("projects");
              const scrollToPosition = projectsSection.offsetTop + projectsSection.offsetHeight - window.innerHeight + 100; // Adjust the offset as needed
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

document.getElementById("nbr-contact").addEventListener("click", function() {
  var email = 'sampyle@outlook.com';
  var subject = 'Email from Website';
  var emailBody = 'Hello,';
  
  var mailto = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
  window.open(mailto, '_blank');
}
);



const tags = document.querySelectorAll('.hidden');

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


document.getElementById("plm-1").addEventListener("click", function() {
  /* open github link in new tab */
  window.open("https://github.com/sampyle03", '_blank').focus();
}
);

document.getElementById("plm-2").addEventListener("click", function() {
  window.open("https://github.com/sampyle03/fake-news-detector", '_blank').focus();
}
);

document.getElementById("plm-3").addEventListener("click", function() {
  window.open("https://github.com/sampyle03/info-retrieval", '_blank').focus();
}
);

document.getElementById("plm-4").addEventListener("click", function() {
  window.open("https://github.com/sampyle03/ueauction", '_blank').focus();
}
);

document.getElementById("plm-5").addEventListener("click", function() {
  window.open("https://github.com/gleb031212/Software-Engineering", '_blank').focus();
}
);

document.getElementById("plm-6").addEventListener("click", function() {
  window.open("https://github.com/uealabour/website", '_blank').focus();
}
);

document.getElementById("plm-7").addEventListener("click", function() {
  window.open("https://github.com/harrymcdonagh/Cambodia-Care", '_blank').focus();
}
);