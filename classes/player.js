function Player() {

  let pos = [(width / 2) - 40, (height / 2) - 40];

  this.setPosition = function (x, y) {
    pos = [x, y];
  }

  this.update = function (progress) {

  }

  this.render = function (ctx) {
    ctx.fillRect(pos[0], pos[1], 80, 80);

    ctx.fillStyle = 'red';
    ctx.fillRect(width / 2, height / 2, 2, 2);
  }
}
