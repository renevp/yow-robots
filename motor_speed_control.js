var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Create a new `motor` hardware instance.
  motor = new five.Motor({
    pin: 5
  });

  const pot = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  const led = new five.Led(9);

  button = new five.Button(2);

  // Add servo to REPL (optional)
  this.repl.inject({
    motor: motor
  });

  pot.on("data", function() {
    console.log("Analog value: " + this.value);
    if(this.value < 100){
      motor.brake();
      led.off();
    }else{
      var speed = this.value / 4;
      console.log("Speed: " + speed);
      motor.start(speed);
      led.on();
    }
  });

});
