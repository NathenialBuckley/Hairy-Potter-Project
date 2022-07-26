// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 300, 85)
let bowl = makePottery("Bowl", 1100, 16)
let plate = makePottery("Plate", 65, 5)
let dragonMug = makePottery("Dragon Mug", 350, 90)
let flowerPot = makePottery("Flower Pot", 1500, 150)


// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2300)
const firedbowl = firePottery(bowl, 1600)
const firedPlate = firePottery(plate, 1800)
const firedDragonMug = firePottery(dragonMug, 2000)
const firedFlowerPot = firePottery(flowerPot, 2200)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

const sellbowl = toSellOrNotToSell(bowl)
console.log(bowl)
