document.addEventListener("DOMContentLoaded", function () {
    const topElement = document.getElementById("top");
    const bottomElement = document.getElementById("bottom");
    const hiddenTag = "hidden";
    // define PATHS (an array) in env.ts
    slideshow = new SlideshowController(PATHS, topElement, bottomElement, hiddenTag);
    slideshow.enable();
    const rippleTag = "ripple";
    ripple = new RippleController(rippleTag);
    ripple.enable();
});
