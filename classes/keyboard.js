window.addEventListener( "keypress", keyDown, false );

function keyDown(e) {
  map.move(e.key);
}
