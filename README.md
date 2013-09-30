# Game Closure Memory Test
This example project is used to test for memory leaks and performance on Game Closure's devkit.

## Usage
The project is simply adding and removing images to the engine's primary view.  To adjust the number of tiles being shown on the screen or the interval at which tiles are added and removed, simply adjust the `TILE_LIMIT` and `TIME_INTERVAL` variables in Application.js.

## Methods
Each new tile is class that is extended from the ImageView class. There are 6 colors, and 6 shapes. Each shape and color image is instantiated as an image resource using the ui.resource.image class. Tiles are removed from the scene using the removeFromSuperview method.