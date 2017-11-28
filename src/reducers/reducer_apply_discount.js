export default function(state = 0, action) {
    switch(action.type) {

    case 'APPLY_COUPON':
        let totalProductPrice = action.payload.totalProductPrice;
        let discountValue = totalProductPrice * (action.payload.discountPercentage / 100);
        let finalPrice = totalProductPrice-discountValue;
        return finalPrice;
    }
    return state;
}