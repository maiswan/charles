> [!WARNING]
> This repo is no longer updated regularly. Please migrate to [scharles](https://github.com/maiswan/scharles) for continued support.

## Setup

1. Populate [src/env.json](src/env.json) as follow:

    ```json
    {
        "Paths": [
            "image_1",
            "image_2"
        ]
    }
    ```
2. Build the project with [`vite build`](https://github.com/vitejs/vite).
3. Open `dist/charles.html`.


## Customization

### JavaScript/TypeScript
This project exposes the global variable [`controllers: Map<String, ControllerBase>`](src/modules/controllerBase.ts), which contains all the controllers added when the page is loaded.

Examples:
```js
controllers.get("noise").disable();
controllers.get("slideshow").nextImage();
controllers.get("slideshow").intervalPeriod = 10000; // change image every 10s
```

### Lively
There is a global function `livelyPropertyListener(name, val)` that helps integrate with [Lively Wallpaper](https://github.com/rocksdanister/lively).

Examples:
```js
livelyPropertyListener("parameter", "noise disable");
livelyPropertyListener("parameter", "slideshow nextImage");
livelyPropertyListener("parameter", "slideshow setIntervalPeriod 10000"); // change image every 10s
```
Note `"parameter"` is a magic string and must be kept intact.
