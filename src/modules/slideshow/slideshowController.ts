import './slideshow.css';

export class SlideshowController {
    private topElement: HTMLImageElement;
    private bottomElement: HTMLImageElement;
    private images: any[] = [];
    private interval: number;
    private _isEnabled: boolean = false;
    private isTransiting: boolean = false;
    private hiddenTag: string;

    private static readonly delay = (milliseconds: number) => new Promise((resolve: Function) => setTimeout(resolve, milliseconds));

    constructor(images: any[], topElement: HTMLImageElement, bottomElement: HTMLImageElement, hiddenTag: string)
    {
        this.images = images;
        this.topElement = topElement;
        this.bottomElement = bottomElement;
        this.hiddenTag = hiddenTag;
    }

    async nextImage(): Promise<boolean>
    {
        if (this.isTransiting) { return false; }
        this.isTransiting = true;

        const nextPath = this.images[Math.floor(Math.random() * this.images.length)];

        this.bottomElement.src = nextPath;
        this.topElement.classList.add(this.hiddenTag);
        await SlideshowController.delay(2000);

        this.topElement.src = nextPath;
        this.topElement.classList.remove(this.hiddenTag);
        
        await SlideshowController.delay(500);
        this.isTransiting = false;
        return true;
    }

    isEnabled(): boolean
    {
        return this._isEnabled;
    }

    enable(interval = 60000): void
    {
        this._isEnabled = true;
        this.interval = window.setInterval(
            () => { this.nextImage() },
            interval
        );
        this.nextImage();
    }

    disable(): void
    {
        this._isEnabled = false;
        clearInterval(this.interval);
    }

    toggle(interval = 60000): void
    {
        if (this._isEnabled) { this.disable(); } else { this.enable(interval); }
    }

    add(image: any): void
    {
        this.images.push(image);
    }

    remove(image: any): void
    {
        const index = this.images.indexOf(image);
        if (index == -1) { return; }

        this.images.splice(index, 1);
    }

    contains(image: any): boolean
    {
        const index = this.images.indexOf(image);
        return index != -1;
    }

    showActiveImageFilename(): void
    {
        alert(this.bottomElement.src);
    }
}