import * as PIXI from 'pixi.js'
import greenImage from "./green.png"
import { Application } from 'pixi.js'

window.addEventListener("resize", function() {
    pixi.renderer.resize(window.innerWidth, window.innerHeight);
  });

const pixi = new PIXI.Application({width : window.innerWidth, height : window.innerHeight})
document.body.appendChild(pixi.view)


const green = PIXI.Sprite.from(greenImage)

green.anchor.set(0.5);

green.scale.set(0.3);

green.x = window.innerWidth / 2;
green.y = window.innerHeight   / 2;

pixi.stage.addChild(green);

