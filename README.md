### Initial Setup

> [!IMPORTANT]
> Specify the images... or the slideshow has nothing to play.

Create `env.js` in the root directory and populate it as follow:

```js
const PATHS = [
    "image1",
    "image2"
];
```

Open [charles.html](charles.html).

----

### Customization

This project exposes the global variables [`slideshow`](slideshowController.js) and [`ripple`](rippleController.js). Send commands through them to control how the slideshow appears.

There's also a `livelyPropertyListener(name, val)` that helps integration with [Lively Wallpaper](https://github.com/rocksdanister/lively). However, it is too ugly to document at this stage.
