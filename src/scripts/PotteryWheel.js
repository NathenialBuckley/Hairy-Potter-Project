//Variable that has the value of the primary key for each piece of pottery.
let potteryPrimaryKey = 1

//Exported Function.
export const makePottery = (objectShape, objectWeight, objectHeight) => {
    let object = {
        id: potteryPrimaryKey++,
        shape: objectShape,
        weight: objectWeight,
        height: objectHeight
    }
    return object
}

