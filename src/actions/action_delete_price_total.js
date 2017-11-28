export const DELETE_PRICE = 'DELETE_PRICE';

export function deleteProductPrice(deletePrice) {
    debugger;
    return {
        type: DELETE_PRICE,
        payload: deletePrice
    };
}