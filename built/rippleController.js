class RippleController {
    _isEnabled = false;
    rippleTag;
    constructor(rippleTag) {
        this.rippleTag = rippleTag;
    }
    isEnabled() {
        return this._isEnabled;
    }
    enable() {
        this._isEnabled = true;
        document.addEventListener("click", this.eventHandler);
    }
    disable() {
        this._isEnabled = false;
        document.removeEventListener("click", this.eventHandler);
    }
    toggle() {
        if (this._isEnabled) {
            this.disable();
        }
        else {
            this.enable();
        }
    }
    eventHandler = (e) => {
        // Source: https://dev.to/leonardoschmittk/how-to-make-a-mouse-ripple-click-effect-with-css-js-and-html-in-2-steps-2fcf
        const ripple = document.createElement("div");
        ripple.classList.add(this.rippleTag);
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        ripple.addEventListener("animationend", function () {
            document.body.removeChild(ripple);
        });
        document.body.appendChild(ripple);
    };
}
