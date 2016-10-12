const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {

  // Create a new `photoresistor` hardware instance.
  const photoresistor = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  const led = new five.Led(11);

  // "data" get the current reading from the photoresistor
  photoresistor.on("data", function() {
    console.log(this.value);
    if (this.value >= 1010) {
      led.on()
    }else{
      led.off()
    }
  });
});
