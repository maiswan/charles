function livelyPropertyListener(name: string, val: string)
{
    if (name !== "parameter") { return; }
    const values: string[] = val.split(" ");

    switch (values[0])
    {
        // Slideshow
        case "nextImage":
            slideshow.nextImage();
            break;

        case "enableSlideshow":
            slideshow.enable(+values[1]);
            break;

        case "toggleSlideshow":
            slideshow.toggle(+values[1]);
            break;

        case "disableSlideshow":
            slideshow.disable();
            break;

        case "showActiveImageFilename":
            slideshow.showActiveImageFilename();
            break;

        // Ripple
        case "enableRipple":
            ripple.enable();
            break;
    
        case "toggleRipple":
            ripple.toggle();
            break;
    
        case "disableRipple":
            ripple.disable();
            break;
    }
}