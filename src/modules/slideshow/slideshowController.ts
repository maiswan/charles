import './slideshow.css';
import { ControllerBase } from '../controllerBase';

export class SlideshowController extends ControllerBase {
    public readonly Identifier = "slideshow";

    private _topElement: HTMLImageElement;
    private _bottomElement: HTMLImageElement;
    private _images: any[] = [];
    private _interval: number;
    private _intervalPeriod: number;
    private _isTransiting: boolean = false;
    private _hiddenTag: string;


    private static readonly delay = (milliseconds: number) => new Promise((resolve: Function) => setTimeout(resolve, milliseconds));

    constructor(images: any[], topElement: HTMLImageElement, bottomElement: HTMLImageElement, hiddenTag: string)
    {
        super();
        this._images = images;
        this._topElement = topElement;
        this._bottomElement = bottomElement;
        this._hiddenTag = hiddenTag;
    }

    get intervalPeriod() { return this._intervalPeriod; }
    set intervalPeriod(milliseconds: number) { 
        this._intervalPeriod = milliseconds;
        if (this.isEnabled) { this.enable(); } // refresh
    }

    async nextImage(): Promise<boolean>
    {
        if (this._isTransiting) { return false; }
        this._isTransiting = true;

        const nextPath = this._images[Math.floor(Math.random() * this._images.length)];

        this._bottomElement.src = nextPath;
        this._topElement.classList.add(this._hiddenTag);
        await SlideshowController.delay(2000);

        this._topElement.src = nextPath;
        this._topElement.classList.remove(this._hiddenTag);
        
        await SlideshowController.delay(500);
        this._isTransiting = false;
        return true;
    }

    enable(): void
    {
        super.enable();
        this._interval = window.setInterval(
            () => { this.nextImage() },
            this._intervalPeriod
        );
        this.nextImage();
    }

    disable(): void
    {
        super.disable();
        clearInterval(this._interval);
    }

    toggle(): void
    {
        if (this.isEnabled) { this.disable(); } else { this.enable(); }
    }

    add(image: any): void
    {
        this._images.push(image);
    }

    remove(image: any): void
    {
        const index = this._images.indexOf(image);
        if (index == -1) { return; }

        this._images.splice(index, 1);
    }

    contains(image: any): boolean
    {
        const index = this._images.indexOf(image);
        return index != -1;
    }

    showActiveImageFilename(): void
    {
        alert(this._bottomElement.src);
    }
}