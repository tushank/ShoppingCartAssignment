export const TOTAL_PRICE = 'TOTAL_PRICE';

export function totalProductPrice(productPrice) {
    return {
        type: TOTAL_PRICE,
        payload: productPrice
    };
}