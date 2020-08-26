/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bullet", "./Bullet/costumes/bullet.svg", { x: 0, y: 0 })
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.cloneStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
