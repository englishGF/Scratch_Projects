/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    document.body.style.background = "black";
    this.size = 20;
    this.goto(0, 0);
    while (true) {
      if (this.keyPressed("w") || this.keyPressed("up arrow")) {
        this.y += 10;
      }
      if (this.keyPressed("s") || this.keyPressed("down arrow")) {
        this.y += -10;
      }
      if (this.keyPressed("d") || this.keyPressed("right arrow")) {
        this.x += 10;
      }
      if (this.keyPressed("a") || this.keyPressed("left arrow")) {
        this.x += -10;
      }
      yield;
    }
  }
}
