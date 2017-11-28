export const APPLY_COUPON = 'APPLY_COUPON';
let discountPercentage = 0;

export function applyCouponCode(couponCode, totalProductPrice) {
    if(couponCode === '#WEEKDAY100'){
        discountPercentage = 15;
        return {
            type:APPLY_COUPON,
            payload: {
                discountPercentage: discountPercentage,
                totalProductPrice: totalProductPrice
            }
        };
    }

    return {
        type:APPLY_COUPON,
        payload: {
            discountPercentage: discountPercentage,
            totalProductPrice: totalProductPrice
        }
    };

}