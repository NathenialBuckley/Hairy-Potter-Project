import { firePottery } from "./Kiln.js";

const tobeSoldPottery = []

export const toSellOrNotToSell = (madePottery) => {
    if (madePottery.weight >= 6 && madePottery.cracked === false) {
        madePottery.price = 40
        tobeSoldPottery.push(madePottery)
    }
    else if (madePottery.weight < 6 && madePottery.cracked === false) {
        madePottery.price = 20
        tobeSoldPottery.push(madePottery)
    }
    else if (madePottery.cracked === true) {
        console.log("The pottery is cracked.")
    }
    return madePottery
}

export const usePottery = () => {
    return tobeSoldPottery
}