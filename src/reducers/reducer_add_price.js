export default function(state = 0, action) {
    switch(action.type) {

        case 'ADD_PRICE':
            state = state + action.payload;
            return state;
    }
    return state;
}