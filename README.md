### Initial Setup

> [!IMPORTANT]
> Specify the images... or the slideshow has nothing to play.

1. Populate [env.ts](env.ts) as follow:

    ```ts
    const PATHS: string[] = [
        "image1",
        "image2"
    ];
2. Build the project with `tsc`.
3. Open [charles.html](charles.html).

----

### Customization

This project exposes the global variables [`slideshow: SlideshowController`](slideshowController.js) and [`ripple: rippleController`](rippleController.js). Send commands through them to control how the slideshow appears.

There's also a `livelyPropertyListener(name, val)` that helps integration with [Lively Wallpaper](https://github.com/rocksdanister/lively). However, it is too ugly to document at this stage.
