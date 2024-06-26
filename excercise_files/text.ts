// Text

import { Application, Text, TextStyle } from "pixi.js";

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

const styly: TextStyle = new TextStyle({
  align: "center",
  fill: "#754c24",
  fontSize: 42,
});
const texty: Text = new Text("私に気づいて先輩！", styly); // Text supports unicode!
texty.text = "This is expensive to change, please do not abuse";

app.stage.addChild(texty);
