import { makePottery } from "./PotteryWheel.js";

export const firePottery = (madePottery, temperatureOfKiln) => {
    madePottery.fired = true
    if (temperatureOfKiln > 2200) {
        madePottery.cracked = true
    }
    else if (temperatureOfKiln <= 2200) {
        madePottery.cracked = false
    }
    return madePottery
}