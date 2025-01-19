// function lowerNavOptions(smallScreen) {

//     let nav = document.getElementById("nav");
//     let navHeight = 0;
//     for (let i = 0; i < nav.children.length-2; i++) {
//         navHeight += nav.children[i].offsetHeight;
//         console.log(nav.children[i].offsetHeight);
//     }
//     console.log(navHeight);
//     let navOptions = document.getElementById("nav-options");

//     /*if (smallScreen) {
//         navHeight += 255;
//     }*/

//     //navOptions.style.bottom = (navHeight) + "px";

// }



function windowResized() {
    
    if (window.innerWidth > 700) {
        resizeCanvas(window.innerWidth*0.64, window.innerHeight);

        let nav = document.getElementById("nav");
        let canvas = document.getElementById("defaultCanvas0");
        nav.after(canvas);

        nav.style.position = "absolute";
        nav.style.width = "34%";
        canvas.style.position = "absolute";

        lowerNavOptions(false);

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

        lowerNavOptions(true);

    }


}

document.getElementById("nav-option-1").addEventListener("click", function() {
    window.location.href = "/about-me";
}
);



// if (window.innerWidth > 700) {
//     lowerNavOptions(false);
// } else {
//     lowerNavOptions(true);
// }
