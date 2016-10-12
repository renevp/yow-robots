var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var servo = new five.Servo({
    pin: 9,
    type: "continuous"
  });

  const pot = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  // Add servo to REPL (optional)
  this.repl.inject({
    servo: servo
  });

  pot.on("data", function() {
    console.log("Analog value: " + this.value);
    if(this.value == 0){
      servo.stop();
    }else{
      //servo.sweep([45, 135]);
      var speed = this.value / 1000;
      console.log("Speed: " + speed);
      servo.cw(speed);
    }
  });

});
