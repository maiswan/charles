import './ripple.css';
import { ControllerBase } from '../controllerBase';

export class RippleController extends ControllerBase {
    public readonly Identifier = "ripple";

    private readonly rippleTag = "ripple";

    enable(): void
    {
        super.enable();
        document.addEventListener("click", this.eventHandler);
    }

    disable(): void
    {
        super.disable();
        document.removeEventListener("click", this.eventHandler);
    }

    toggle(): void
    {
        if (this.isEnabled) { this.disable(); } else { this.enable(); }
    }

    private eventHandler = (e: MouseEvent): void => {
        // Source: https://dev.to/leonardoschmittk/how-to-make-a-mouse-ripple-click-effect-with-css-js-and-html-in-2-steps-2fcf

        const ripple = document.createElement("div");

        ripple.classList.add(this.rippleTag);
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`; 
    
        ripple.addEventListener("animationend", function() {
            document.body.removeChild(ripple);
        });
            
        document.body.appendChild(ripple);
    }
}