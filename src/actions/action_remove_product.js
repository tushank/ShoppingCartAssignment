export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function removeProduct(selectedProductData) {
    debugger;

    return {
        type: REMOVE_PRODUCT,
        payload: selectedProductData
    };
}