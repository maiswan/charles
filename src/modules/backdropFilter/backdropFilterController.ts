import './backdropFilter.css';
import { ControllerBase } from '../controllerBase';

export class BackdropFilterController extends ControllerBase
{
    public readonly Identifier = "backdropFilter";
    private readonly Tag = "backdropFilter";

    private _backdropElement: HTMLDivElement = document.createElement("div");

    constructor(canvas: HTMLElement)
    {
        super();
        this._canvasElement = canvas;
        this._backdropElement.id = this.Tag;
        this._canvasElement.appendChild(this._backdropElement);
        this.update();
    }

    private _canvasElement: HTMLElement;
    public get canvasElement(): HTMLElement { return this._canvasElement; }
    public set canvasElement(element: HTMLElement)
    { 
        this._canvasElement = element;
        this.update();
    }

    private filters: Map<string, string> = new Map<string, string>();

    public set(key: string, value: string): void
    { 
        this.filters.set(key, value);
        this.update();
    }
    
    public get(key: string): string | undefined
    { 
        return this.filters.get(key);
    }

    public remove(key: string): void
    { 
        this.filters.delete(key);
        this.update();
    }

    public clear(): void
    { 
        this.filters.clear();
        this.update();
    }

    enable(): void
    {
        super.enable();
        this.update();
    }

    disable(): void
    {
        super.disable();
        this.update();
    }

    private update(): void
    {
        const opacity: string = this.isEnabled ? "1" : "0";
        
        this._backdropElement.style.setProperty("opacity", opacity);

        var output: string = "";
        this.filters.forEach((value: string, key: string) => {
            output += `${key}(${value}) `;
        });

        this._backdropElement.style.setProperty("backdrop-filter", output);
    }
}