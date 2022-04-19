const MissionCommander = require('./app/missionCommander');

const carlo = new MissionCommander("Carlo")
const frank = new MissionCommander("Frank")
const eva = new MissionCommander("Eva")

console.log(carlo.name)
console.log(frank.name)
console.log(eva.name)