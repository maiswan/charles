import { SlideshowController } from "./modules/slideshow/slideshowController"
import { RippleController } from "./modules/ripple/rippleController"
import { NoiseController } from "./modules/noise/noiseController"
import env from "./env.json"

declare global {
    var slideshow: SlideshowController;
    var ripple: RippleController;
    var noise: NoiseController;
}

document.addEventListener("DOMContentLoaded", function() {
    const topElement: HTMLImageElement = <HTMLImageElement>document.getElementById("top");
    const bottomElement: HTMLImageElement = <HTMLImageElement>document.getElementById("bottom");
    const hiddenTag: string = "hidden";
    
    globalThis.slideshow = new SlideshowController(env.Paths, topElement, bottomElement, hiddenTag);
    globalThis.slideshow.intervalPeriod = 60000;
    globalThis.slideshow.enable();

    globalThis.ripple = new RippleController();
    globalThis.ripple.enable();

    const canvasElement: HTMLElement = <HTMLElement>document.getElementById("base");
    globalThis.noise = new NoiseController(canvasElement, 1, 0.15);
    globalThis.noise.enable();
});