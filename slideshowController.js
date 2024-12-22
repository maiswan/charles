class SlideshowController {
    #topElement;
    #bottomElement;
    #images = [];
    #interval = null;
    #isEnabled = false;
    #isTransiting = false;
    #hiddenTag;

    #delay(milliseconds) 
    {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    constructor(images, topElement, bottomElement, hiddenTag)
    {
        this.#images = images;
        this.#topElement = topElement;
        this.#bottomElement = bottomElement;
        this.#hiddenTag = hiddenTag;
    }

    async nextImage()
    {
        if (this.#isTransiting) { return false; }
        this.#isTransiting = true;

        const nextPath = this.#images[Math.floor(Math.random() * this.#images.length)];

        this.#bottomElement.src = nextPath;
        this.#topElement.classList.add(this.#hiddenTag);
        await this.#delay(2000);

        this.#topElement.src = nextPath;
        this.#topElement.classList.remove(this.#hiddenTag);
        
        await this.#delay(500);
        this.#isTransiting = false;
        return true;
    }

    isEnabled()
    {
        return this.#isEnabled;
    }

    enable(interval = 60000)
    {
        this.#isEnabled = true;
        this.#interval = setInterval(
            () => { this.nextImage() },
            interval
        );
        this.nextImage();
    }

    disable()
    {
        this.#isEnabled = false;
        clearInterval(this.#interval);
    }

    toggle(interval = 60000)
    {
        if (this.#isEnabled) { this.disable(); } else { this.enable(interval); }
    }

    add(image)
    {
        this.#images.push(image);
    }

    remove(image)
    {
        const index = this.#images.indexOf(image);
        if (index == -1) { return; }

        this.#images.splice(index, 1);
    }

    contains(image)
    {
        const index = this.#images.indexOf(image);
        return index != -1;
    }

    showActiveImageFilename()
    {
        alert(this.#bottomElement.src);
    }
}