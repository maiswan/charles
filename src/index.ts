import { BackdropFilterController } from "./modules/backdropFilter/backdropFilterController"
import { ControllerBase } from "./modules/controllerBase"
import { NoiseController } from "./modules/noise/noiseController"
import { RippleController } from "./modules/ripple/rippleController"
import { SlideshowController } from "./modules/slideshow/slideshowController"
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

    const canvasElement: HTMLElement = <HTMLElement>document.getElementById("base");
    
    const slideshow = new SlideshowController(canvasElement, env.Paths);
    slideshow.intervalPeriod = 60000;
    slideshow.enable();

    const ripple = new RippleController();
    ripple.enable();

    const noise = new NoiseController(canvasElement, 0);
    noise.enable();

    const backdropFilter = new BackdropFilterController(canvasElement);
    // backdropFilter.set("sepia", "100%");
    backdropFilter.enable();

    controllers = new Map<String, ControllerBase>();
    addController(controllers, slideshow);
    addController(controllers, ripple);
    addController(controllers, noise);
    addController(controllers, backdropFilter);

    livelyPropertyListener = propertyListener;
});