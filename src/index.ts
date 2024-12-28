import { SlideshowController } from "./modules/slideshow/slideshowController"
import { RippleController } from "./modules/ripple/rippleController"
import env from "./env.json"

declare var slideshow: SlideshowController;
declare var ripple: RippleController;

document.addEventListener("DOMContentLoaded", function() {
    const topElement: HTMLImageElement = <HTMLImageElement>document.getElementById("top");
    const bottomElement: HTMLImageElement = <HTMLImageElement>document.getElementById("bottom");
    const hiddenTag: string = "hidden";
    
    // define PATHS (an array) in env.ts
    globalThis.slideshow = new SlideshowController(env.Paths, topElement, bottomElement, hiddenTag);
    globalThis.slideshow.enable();

    const rippleTag = "ripple";
    globalThis.ripple = new RippleController(rippleTag);
    globalThis.ripple.enable();
});