// Container

import { Application, Sprite, Container } from "pixi.js";

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

const bigConty: Container = new Container();
bigConty.scale.set(2); // You can use set and only one to set x and y
bigConty.position.x = 100;
bigConty.y = 200; // This is a shortcut for .position.y and it also exists for .position.x
app.stage.addChild(bigConty);

const littleConty: Container = new Container();
// position has a copy setter. It won't use your reference but copy the values from it!
littleConty.position = new Point(300, 200);
bigConty.addChild(littleConty);
