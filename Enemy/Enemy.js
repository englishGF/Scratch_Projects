/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Enemy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Enemy/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.visible = true;
    this.goto(100, 0);
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites.Sprite1.y - this.y,
          this.sprites.Sprite1.x - this.x
        )
      );
      this.move(1);
    }
  }
}
