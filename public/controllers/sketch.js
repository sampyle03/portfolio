const flock = [];

function setup() {
    const canvas = createCanvas(window.innerWidth*0.64, window.innerHeight);
    for (let i = 0; i < 240; i++){
        flock.push(new Boid());
    }
    if (window.innerWidth > 700) {
        resizeCanvas(window.innerWidth*0.64, window.innerHeight);

        let nav = document.getElementById("nav");
        let canvas = document.getElementById("defaultCanvas0");
        nav.after(canvas);

        nav.style.position = "absolute";
        nav.style.width = "34%";
        canvas.style.position = "absolute";

    } else {
        resizeCanvas(window.innerWidth, window.innerHeight);
        document.body.style.width = "100%";

        let nav = document.getElementById("nav");
        let canvas = document.getElementById("defaultCanvas0");
        canvas.after(nav);

        nav.style.position = "relative";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.width = "100%";
        canvas.style.position = "relative";
        canvas.style.top = "0";

        let emptySpace = document.getElementById("empty-space");
        nav.after(emptySpace);
        
        window.scrollTo(0, 0);

    }
}

function draw() {
    background(51, 54, 71);

    for (let boid of flock) {
        boid.edges();
        boid.update();
        boid.flock(flock);
        boid.avoidEdgeOfScreen();
        boid.avoidCursor(createVector(mouseX, mouseY));
        boid.show();
    }
}
