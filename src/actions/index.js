export const PRODUCT_SELECTED = 'PRODUCT_SELECTED';

export function selectProduct(selectedProductData) {
    //selectBook is an ActionCreator, it needs to return an action,
    // an object with type property

    return {
        type: PRODUCT_SELECTED,
        payload: selectedProductData
    };
}