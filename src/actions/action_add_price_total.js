export const ADD_PRICE = 'ADD_PRICE';

export function addProductPrice(addPrice) {
    debugger;
    return {
        type: ADD_PRICE,
        payload: addPrice
    };
}