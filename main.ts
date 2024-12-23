declare var slideshow: SlideshowController;
declare var ripple: RippleController;

document.addEventListener("DOMContentLoaded", function() {
    const topElement: HTMLImageElement = <HTMLImageElement>document.getElementById("top");
    const bottomElement: HTMLImageElement = <HTMLImageElement>document.getElementById("bottom");
    const hiddenTag: string = "hidden";
    
    // define PATHS (an array) in env.ts
    slideshow = new SlideshowController(PATHS, topElement, bottomElement, hiddenTag);
    slideshow.enable();

    const rippleTag = "ripple";
    ripple = new RippleController(rippleTag);
    ripple.enable();
});