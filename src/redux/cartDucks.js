// ========== Constants ==========
const initialState = {
    cart: [],
}

const EDIT_QUANTITY = 'EDIT_QUANTITY';
const EDIT_ITEM = 'EDIT_ITEM';
// ===============================


// ========== Reducers ==========
export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case EDIT_QUANTITY:
            return {...state, cart: action.data.cart}
        case EDIT_ITEM:
            return {...state, cart: action.data.cart}
        default:
            return state;
    }
}
// ==============================


// ========== Actions ==========
export const editQuantityCartAction = (productId, quantity) => (dispatch, getState) => {
    try{
        const { cart } = getState().cart;
        const selectedItem = cart.findIndex(x => x.productId === productId);

        if(selectedItem !== -1){
            cart[selectedItem].quantity += quantity;
        }

        dispatch({
            type: EDIT_QUANTITY,
            data: {
                cart
            }
        })
    } catch(err){
        console.error(err);
    }
}

export const editItemCartAction = (productId, quantity = 0) => (dispatch, getState) => {
    try{
        const { cart } = getState().cart;
        const selectedIndex = cart.findIndex(x => x.productId === Number(productId));

        if(selectedIndex !== -1){
            if(quantity !== 0) {
                cart.splice(selectedIndex, 1, { productId: Number(productId), quantity });
            } else{
                cart.splice(selectedIndex, 1);
            }
        } else{
            if(quantity !== 0) cart.splice(cart.length, 0, { productId: Number(productId), quantity })
        }

        dispatch({
            type: EDIT_ITEM,
            data: {
                cart
            }
        })
    } catch(err){
        console.error(err);
    }
}
// =============================