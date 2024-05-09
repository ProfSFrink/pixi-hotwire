// Sprites
import { Application, Sprite } from "pixi.js";

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

const clampy: Sprite = Sprite.from("clampy.png");

clampy.anchor.set(0.5);

//setting it to the middle of the screen
clampy.x = app.screen.width / 2;
clampy.y = app.screen.width / 2;

app.stage.addChild(clampy);
