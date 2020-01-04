function Player() {

  let pos = [0, 0];

  this.setPosition = function (x, y) {
    pos = [x, y];
  }

  this.update = function (progress) {

  }

  this.render = function (ctx) {
    // ctx.fillRect((width / 2) - 80, (height / 2) - 80, 80, 80);
    ctx.fillRect(pos[0], pos[1], 80, 80);
  }
}
