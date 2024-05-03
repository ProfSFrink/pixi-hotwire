// Getting started

import { Application, Sprite, Container } from "pixi.js";

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

const conty: Container = new Container();
conty.x = 200;
conty.y = 0;
app.stage.addChild(conty);

const clampy: Sprite = Sprite.from("clampy.png");
clampy.x = 100;
clampy.y = 100;
conty.addChild(clampy);

// const conty_2: Container = new Container();
// conty_2.x = 200;
// conty_2.y = 200;
// app.stage.addChild(conty_2);

// const clampy_2: Sprite = Sprite.from("clampy.png");
// clampy_2.x = 50;
// clampy_2.y = 50;
// conty_2.addChild(clampy_2);
