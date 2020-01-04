function Player() {

  let pos = [(width / 2) - (scale / 2), (height / 2) - (scale / 2)];

  let animating = false;
  let animation = [0, 0];

  this.setPosition = function (x, y) {
    pos = [x, y];
  }

  this.playAnimation = function (dir) {
    switch(dir) {
      case 'w':
        animation = [animation[0] + 1, 3];
        if (animation[0] > 3) {
          animation[0] == 0;
        }
        break;
      case 'a':
        animation = [animation[0] + 1, 1];
        break;
      case 's':
          animation = [animation[0] + 1, 0];
        break;
      case 'd':
          animation = [animation[0] + 1, 2];
        break;
    }
    if (animation[0] > 3) {
      animation[0] = 0;
    }
  }

  this.update = function (progress) {

  }

  this.render = function (ctx) {
    const player = document.getElementById("player");
    const spriteDimension = 256 / 4;
    const x = 0; // (256 / 4)
    const y = 0;
    // his.playAnimation('a');
    ctx.drawImage(player, animation[0] * spriteDimension, animation[1] * spriteDimension, spriteDimension, spriteDimension, pos[0], pos[1], scale, scale);
  }

}
