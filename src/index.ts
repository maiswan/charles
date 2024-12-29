import { SlideshowController } from "./modules/slideshow/slideshowController"
import { RippleController } from "./modules/ripple/rippleController"
import { NoiseController } from "./modules/noise/noiseController"
import { ControllerBase } from "./modules/controllerBase"
import { propertyListener } from "./modules/lively/livelyPropertyListener"
import env from "./env.json"

declare global
{
    var controllers: Map<String, ControllerBase>;
    var livelyPropertyListener: Function;
}

document.addEventListener("DOMContentLoaded", function() {
    function addController (map: Map<String, ControllerBase>, controller: ControllerBase) {
        map.set(controller.Identifier, controller);
    }

    const topElement: HTMLImageElement = <HTMLImageElement>document.getElementById("top");
    const bottomElement: HTMLImageElement = <HTMLImageElement>document.getElementById("bottom");
    const hiddenTag: string = "hidden";
    
    const slideshow = new SlideshowController(env.Paths, topElement, bottomElement, hiddenTag);
    slideshow.intervalPeriod = 60000;
    slideshow.enable();

    const ripple = new RippleController();
    ripple.enable();

    const canvasElement: HTMLElement = <HTMLElement>document.getElementById("base");
    const noise = new NoiseController(canvasElement, 1, 0.15);
    noise.enable();

    controllers = new Map<String, ControllerBase>();
    addController(controllers, slideshow);
    addController(controllers, ripple);
    addController(controllers, noise);

    livelyPropertyListener = propertyListener;
});