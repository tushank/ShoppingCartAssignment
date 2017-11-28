// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = [], action) {
    switch(action.type) {
        case 'PRODUCT_SELECTED':
            // return action.payload;
            console.log('state.concat([action.payload]) : ',state.concat([action.payload]));
            return state.concat([action.payload]);

        case 'REMOVE_PRODUCT':
            let productList = state.slice(0);
            let index = productList.indexOf(action.payload);
            productList.splice(index, 1);
            state = productList.slice(0);
            return state;
    }
    return state;
}