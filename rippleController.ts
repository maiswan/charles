class RippleController {
    private _isEnabled: boolean = false;
    private rippleTag: string;

    constructor(rippleTag: string)
    {
        this.rippleTag = rippleTag;
    }

    isEnabled(): boolean
    {
        return this._isEnabled;
    }

    enable(): void
    {
        this._isEnabled = true;
        document.addEventListener("click", this.eventHandler);
    }

    disable(): void
    {
        this._isEnabled = false;
        document.removeEventListener("click", this.eventHandler);
    }

    toggle(): void
    {
        if (this._isEnabled) { this.disable(); } else { this.enable(); }
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