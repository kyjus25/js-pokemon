function Map() {
  let speed = 4;

  let spawn = [0, 0];

  let pos = [0, 0];

  let moving = false;
  let prevPosition = [0, 0];
  let futurePosition = [0, 0];
  let futureDirection = 'none';

  this.setup = function () {
      let playerStartX = scale * 3;
      let playerStartY = scale * 3;

      spawn[0] = ((width / 2) - (scale / 2)) - playerStartX;
      spawn[1] = ((height / 2) - (scale / 2)) - playerStartY;
  }

  this.move = function (key) {
    if (moving === false) {
      switch(key) {
        case 'w':
          futurePosition = [pos[0], pos[1] - scale];
          futureDirection = 'w';
          break;
        case 'a':
          futurePosition = [pos[0] - scale, pos[1]];
          futureDirection = 'a';
          break;
        case 's':
            futurePosition = [pos[0], pos[1] + scale];
            futureDirection = 's';
          break;
        case 'd':
            futurePosition = [pos[0] + scale, pos[1]];
            futureDirection = 'd';
          break;
      }
    }
  }

  this.beginLerp = function () {
      moving = true;
  }

  this.lerp = function () {
    if (pos[0] === futurePosition[0] && pos[1] === futurePosition[1]) {
      moving = false;
      prevPosition = futurePosition;
    } else {
      player.playAnimation(futureDirection);
      switch(futureDirection) {
        case 'w':
          pos[1] -= speed;
          break;
        case 'a':
          pos[0] -= speed;
          break;
        case 's':
            pos[1] += speed;
          break;
        case 'd':
            pos[0] += speed;
          break;
      }
    }
  }

  this.update = function (progress) {

    if (moving == false && (prevPosition[0] !== futurePosition[0] || prevPosition[1] !== futurePosition[1])) {
      this.beginLerp();
    }

    if (moving == true && (prevPosition[0] !== futurePosition[0] || prevPosition[1] !== futurePosition[1])) {
      this.lerp();
    }

  }

  this.render = function (ctx) {
    const map = document.getElementById("map");
    const x = 1;
    const y = 0;
    ctx.clearRect(0, 0, width, height);
    // ctx.drawImage(map,x * 16,y * 16,16,16,0,0,80,80); // 80 = 5X magnification

    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        const positionX = i * scale + spawn[0] - pos[0];
        const positionY = j * scale + spawn[1] - pos[1];
        ctx.drawImage(map,x * 16,y * 16,16,16,positionX,positionY,scale,scale);
      }
    }
  }
}
