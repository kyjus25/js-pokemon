function Handler() {
  let objects = [];

  this.new = function (newObject) {
    objects.push(newObject);
  }

  this.update = function (progress) {
    objects.forEach(obj => {
      obj.update(progress);
    });
  }

  this.render = function (ctx) {
    objects.forEach(obj => {
      obj.render(ctx);
    });
  }
}
