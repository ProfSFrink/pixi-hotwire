// BitmapText

import { Application, BitmapFont, BitmapText } from "pixi.js";

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

// This is the expensive part. This creates the font atlas
BitmapFont.from("comic 32", {
  fill: "#ffffff", // White, will be colored later
  fontFamily: "Comic Sans MS",
  fontSize: 32,
});

// Remeber, this font only has letters and numbers. No commas or any other symbol.
const bitmapTexty: BitmapText = new BitmapText(
  "I love baking, my family, and my friends",
  {
    fontName: "comic 32",
    fontSize: 32, // Making it look to big or small will look bad
    tint: 0xff0000, // Here we make it red
  },
);

bitmapTexty.text = "This is cheap";
bitmapTexty.text = "Change it as much as you want";

app.stage.addChild(bitmapTexty);
