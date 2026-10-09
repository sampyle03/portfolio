// for loading icon to show when page is loading
document.addEventListener("DOMContentLoaded", function () {
    // Show the loading icon initially
    const loadingIcon1 = document.getElementById("loading-icon1");
    const loadingIcon2 = document.getElementById("loading-icon2");
    loadingIcon1.style.display = "block";
    loadingIcon2.style.display = "block";

    // Loading icon 1 and 2 animation (one goes large while the other goes small)
    loadingIcon1.style.animation = "loading1 3.5s linear infinite";
    loadingIcon2.style.animation = "loading2 3.5s linear infinite";

    const boidSketch = document.getElementById("boid-sketch");

    /*
    var script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.async = true;
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js"
    boidSketch.appendChild(script1)

    var script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.async = true;
    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js"
    boidSketch.appendChild(script2)

    var script3 = document.createElement('script');
    script3.type = 'text/javascript';
    script3.async = true;
    script3.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.sound.min.js"
    boidSketch.appendChild(script3)

    */

    var script4 = document.createElement('script');
    script4.type = 'text/javascript';
    script4.async = true;
    script4.src = "../controllers/boid.js"
    boidSketch.appendChild(script4)

    var script5 = document.createElement('script');
    script5.type = 'text/javascript';
    script5.async = true;
    script5.src = "../controllers/sketch.js"
    boidSketch.appendChild(script5)

    // Wait for the full page (images, etc.) to load
    window.addEventListener("load", function () {
        // Hide loading icon after 1 second
        setTimeout(function () {
            loadingIcon1.style.display = "none";
            loadingIcon2.style.display = "none";
            document.getElementById("nav").style.display = "flex";
            document.getElementById("defaultCanvas0").style.display = "block";
            document.getElementById("floatingDots").style.display = "block";
            document.getElementById("boid-cursor-note").style.display = "block";
            document.getElementById("pic-over-boids").style.display = "inline";
            /* do javascript version of @media (max-width: 700px) */
            if (window.innerWidth < 700) {
                document.getElementById("boid-cursor-note-mobile").style.display = "block";
            }
            windowResized();
        }, 10);
    });
});

function windowResized() {
    
    if (window.innerWidth > 700) {
        resizeCanvas(window.innerWidth*0.6, window.innerHeight);

        let nav = document.getElementById("nav");
        let mobileTitle = document.getElementById("mobile-title-and-subtitle");
        let canvas = document.getElementById("defaultCanvas0");
        canvas.after(mobileTitle);
        mobileTitle.after(nav);

        nav.style.position = "absolute";
        nav.style.width = "40%";
        canvas.style.position = "absolute";

        // lowerNavOptions(false);

    } else {
        resizeCanvas(window.innerWidth, window.innerHeight);
        document.body.style.width = "100%";

        let nav = document.getElementById("nav");
        let mobileTitle = document.getElementById("mobile-title-and-subtitle");
        let canvas = document.getElementById("defaultCanvas0");
        canvas.after(mobileTitle);
        mobileTitle.after(nav);

        nav.style.position = "relative";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.width = "100%";
        canvas.style.position = "relative";
        canvas.style.top = "0";

        // lowerNavOptions(true);

    }


}

document.getElementById("nav-option-1").addEventListener("click", function() {
    window.location.href = "/about-me";
}
);

document.getElementById("nav-option-2").addEventListener("click", function() {
    window.location.href = "/about-me/projects";
}
);

document.getElementById("predictgiiron-link").addEventListener("click", function() {
    window.location.href = "https://fundingawards.nihr.ac.uk/award/NIHR207227";
}
);


// Floating leaves animation
const generateFloatingDots = () => {
    const canvas = document.getElementById("floatingDots");
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const leafColors = [
        "#c47b1c",
        "#c9967a",
        "#a78a18",
        "#812b04"
    ];
    
    const dots = [];
    for (let i = 0; i < 100; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 4,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
            rotation: Math.random() * Math.PI * 2,
            color: leafColors[Math.floor(Math.random() * leafColors.length)]
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const dot of dots) {
            ctx.save();
            ctx.translate(dot.x, dot.y);
            ctx.rotate(dot.rotation);
            ctx.beginPath();
            ctx.arc(0, 0, dot.r, 0, Math.PI * 1.1);
            ctx.fillStyle = dot.color;
            ctx.fill();
            ctx.restore();

            dot.x += dot.dx;
            dot.y += dot.dy;
            if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
            if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
        }
        requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener("resize", () => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    });
}
generateFloatingDots();