// class Phone {
//   static lock = true;
//   #charge = "50%";
//   #volt = "5v";
//   #inteval = 2000;
//   constructor() {
//     this.phone = "samsung";
//   }

//   batteryStatus() {
//     const charge = this.#charge;
//     const volt = this.#volt;
//     const interval = this.#inteval;
//     let i = 0;

//     const id = setInterval(function () {
//       if (i === 0) {
//         console.log("Battery Charge Status " + charge);
//       } else if (i === 2) {
//         console.log("Battery volt Status " + volt);
//       } else if (i === 6) {
//         console.log("Battery condition is good");
//       }

//       i = i + 2;
//     }, interval);
//     // clear interval after finish checking
//     this.clearInterval(id);
//   }

//   clearInterval(id) {
//     setTimeout(function () {
//       clearInterval(id);
//     }, 10000);
//   }

//   getBatteryStatus() {
//     this.batteryStatus();
//   }

//   increaseVolume() {
//     console.log("volume increase");
//   }

//   decreaseVolume() {
//     console.log("volume decreased");
//   }
// }
// const obj = new Phone();
// class Settings extends Phone {
//   increaseVolume() {
//     console.log("volume increase by setting");
//   }

//   decreaseVolume() {
//     console.log("volume decreased by setting");
//   }
// }
// const newSetting = new Settings();
// newSetting.getBatteryStatus();

function multiplyNumbers(x) {
  return function (y) {
    return function () {
      return x * y;
    };
  };
}
console.log(multiplyNumbers(5)(6)())