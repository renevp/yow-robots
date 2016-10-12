var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Create a new `motor` hardware instance.
  motor = new five.Motor({
    pin: 5
  });

  const led = new five.Led(9);

  const button = new five.Button(2);

  // Add servo to REPL (optional)
  this.repl.inject({
    motor: motor
  });

  // Button Event API

  // "down" the button is pressed
  button.on("down", function() {
    console.log("down");
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
    motor.start(255);
    led.on();
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
    motor.brake();
    led.off();
  });

});
