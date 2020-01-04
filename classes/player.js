function Player() {

  let pos = [(width / 2) - (scale / 2), (height / 2) - (scale / 2)];

  this.setPosition = function (x, y) {
    pos = [x, y];
  }

  this.update = function (progress) {

  }

  this.render = function (ctx) {
    const player = document.getElementById("player");
    const x = 0; // (256 / 4)
    const y = 0;
    ctx.drawImage(player, x, y, 256 / 4, 256 / 4, pos[0], pos[1], scale, scale);
  }

}
