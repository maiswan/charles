import './noise.css';
import { ControllerBase } from '../controllerBase';

export class NoiseController extends ControllerBase {
    public readonly Identifier = "noise";

    private readonly noiseTag = `${this.Identifier}_noise`;

    private _canvasElement: HTMLElement;
    private _noiseElement: HTMLElement = document.createElement("div");

    private _noise: number;
    public get noise(): number { return this._noise; }
    public set noise(value: number)
    { 
        this._noise = value;
        this.update(this.noise);
    }

    constructor(canvas: HTMLElement, noise: number)
    {
        super();
        this._canvasElement = canvas;
        this.noise = noise;

        this._noiseElement.id = this.noiseTag;
        this._canvasElement.appendChild(this._noiseElement);
    }

    enable(): void
    {
        super.enable();
        this.update(this.noise);
    }

    disable(): void
    {
        super.disable();
        this.update(0);
    }

    toggle(): void
    {
        super.toggle();
    }

    update(noise: number)
    {
        // document.documentElement.style.setProperty(`--${this.noiseTag}`, "" + noise);
        this._noiseElement.style.setProperty(`--${this.noiseTag}`, "" + noise);
    }

    receive(parameters: string[]): void {
        super.receive(parameters);

        switch (parameters[0])
        {
            case "setNoise":
                this.noise = Number(parameters[1]);
                return;
        }
    }
}
