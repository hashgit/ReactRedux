export default function(state = {
    processing: false,
    failed: null,
    result: null
}, action) {
    if (action.type === 'CONVERT_PENDING') {
        let newState = {...state};
        newState.processing = true;
        return newState;
    } else if (action.type === 'CONVERT_FULFILLED') {
        let newState = {...state};
        newState.result = action.payload;
        newState.processing = false;
        return newState;
    } else if (action.type == "CONVERT_REJECTED") {
        let newState = {...state};
        newState.processing = false;
        newState.failed = action.payload;
    } else {
        console.log('Unknown action ' + action.type);
        return state;
    }
}
