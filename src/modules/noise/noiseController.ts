import './noise.css';
import { ControllerBase } from '../controllerBase';

export class NoiseController extends ControllerBase {
    public readonly Identifier = "noise";

    private readonly baseTag = `${this.Identifier}_base`;
    private readonly noiseTag = `${this.Identifier}_noise`;
    private readonly brightnessTag = `${this.Identifier}_brightness`;

    private _canvasElement: HTMLElement;
    private _noiseElement: HTMLElement = document.createElement("div");
    private _brightnessElement: HTMLElement= document.createElement("div");

    private _noise: number;
    public get noise(): number { return this._noise; }
    public set noise(value: number)
    { 
        this._noise = value;
        this.update(this.noise, this.brightness);
    }

    private _brightness : number;
    /**
     * @deprecated set brightness through BackdropFilter instread
     */
    public get brightness(): number { return this._brightness; }
    /**
     * @deprecated set brightness through BackdropFilter instread
     */
    public set brightness(value: number)
    { 
        this._brightness = value;
        this.update(this.noise, this.brightness);
    }

    constructor(canvas: HTMLElement, noise: number, brightness?: number)
    {
        super();
        this._canvasElement = canvas;
        this.noise = noise;

        if (brightness !== undefined)
        {
            this.brightness = brightness;
        }
        
        this._brightnessElement.classList.add(this.baseTag);
        this._brightnessElement.id = this.brightnessTag;
        this._canvasElement.appendChild(this._brightnessElement);

        this._noiseElement.classList.add(this.baseTag);
        this._noiseElement.id = this.noiseTag;
        this._canvasElement.appendChild(this._noiseElement);
    }

    enable(): void
    {
        super.enable();
        this.update(this.noise, this.brightness);
    }

    disable(): void
    {
        super.disable();
        this.update(0, 1);
    }

    toggle(): void
    {
        super.toggle();
    }

    update(noise: number, brightness: number)
    {
        document.documentElement.style.setProperty(`--${this.noiseTag}`, "" + noise);   
        document.documentElement.style.setProperty(`--${this.brightnessTag}`, "" + brightness);  
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
