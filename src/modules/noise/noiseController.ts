import './noise.css';
import { ControllerBase } from '../controllerBase';

export class NoiseController extends ControllerBase {
    public readonly Identifier = "noise";

    private readonly baseTag = `${this.Identifier}_base`;
    private readonly noiseTag = `${this.Identifier}_noise`;
    private readonly brightnessTag = `${this.Identifier}_brightness`;
    private readonly hiddenTag = `${this.Identifier}_hidden`;

    private _canvasElement: HTMLElement;
    private _noiseElement: HTMLElement = document.createElement("div");
    private _brightnessElement: HTMLElement= document.createElement("div");

    private _noise: number;
    public get noise(): number { return this._noise; }
    public set noise(value: number)
    { 
        this._noise = value;        
        this._brightnessElement.style.opacity = "" + this.noise;
    }

    private _brightness : number;
    public get brightness(): number { return this._brightness; }
    public set brightness(value: number)
    { 
        this._brightness = value;
        this._brightnessElement.style.backgroundColor = `rgba(0,0,0,${1-this.brightness})`;
    }

    constructor(canvas: HTMLElement, noise: number, brightness: number)
    {
        super();
        this._canvasElement = canvas;
        this.noise = noise;
        this.brightness = brightness;

        this._brightnessElement.classList.add(this.baseTag);
        this._brightnessElement.classList.add(this.hiddenTag);
        this._brightnessElement.id = this.brightnessTag;
        this._canvasElement.appendChild(this._brightnessElement);

        this._noiseElement.classList.add(this.baseTag);
        this._noiseElement.classList.add(this.hiddenTag);
        this._noiseElement.id = this.noiseTag;
        this._canvasElement.appendChild(this._noiseElement);
    }

    enable(): void
    {
        super.enable();        
        this._brightnessElement.classList.remove(this.hiddenTag);
        this._noiseElement.classList.remove(this.hiddenTag);
    }

    disable(): void
    {
        super.disable();
        this._brightnessElement.classList.add(this.hiddenTag);
        this._noiseElement.classList.add(this.hiddenTag);
    }

    toggle(): void
    {
        if (this.isEnabled) { this.disable(); } else { this.enable(); }
    }

    receive(parameters: string[]): void {
        super.receive(parameters);

        switch (parameters[0])
        {
            case "setNoise":
                this.noise = Number(parameters[1]);
                return;

            case "setBrightness":
                this.brightness = Number(parameters[1]);
                return;
        }
    }
}