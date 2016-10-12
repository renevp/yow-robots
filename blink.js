const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  const led = new five.Led(11);

  this.repl.inject({
    led: led
  });

  // Blink it!
  //led.blink(1000);
});
