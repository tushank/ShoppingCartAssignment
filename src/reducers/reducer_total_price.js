export default function(state = 0, action) {
    switch(action.type) {
        case 'TOTAL_PRICE':
            state = state + action.payload;
            return state;

        case 'DELETE_PRICE':
            state = state - action.payload;
            return state;

        case 'ADD_PRICE':
            state = state + action.payload;
            return state;
    }
    return state;
}