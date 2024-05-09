// Graphics
import { Application, Graphics } from "pixi.js";

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

const graphy: Graphics = new Graphics();

// we give instructions in order, begin fill, line style, draw circle, end filling
graphy.beginFill(0xf00ff);
graphy.lineStyle(10, 0x00ff00);
graphy.drawCircle(0, 0, 25); // Notice how we set the drawing at 0, 0? NOT at 100, 100!
graphy.endFill();

app.stage.addChild(graphy); // Can be added before setting position nothing bad will happen.

// Here we set it at 100, 100
graphy.x = 100;
graphy.y = 100;

// I can't stress this enough: Do draw your graphics relative to their own origin and then
// move the object. Don't try to draw it directly on the screen position you want
