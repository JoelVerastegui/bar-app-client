// ========== Constants ==========
const initialState = {
    products: [
        {
            "img": [
                "https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drink_1.png",
                "https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drink_1_1.jpg"
            ],
            "_id": "5f88d961f9129f4a20ae3fc6",
            "id": 1,
            "name": "Jameson",
            "price": 170.9,
            "stock": 47,
            "label": "Roja",
            "origin": "Irlanda",
            "year": 1985,
            "volume": 750,
            "sku": 148571
        },
        {
            "img": [
                "https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drink_2.png"
            ],
            "_id": "5f88d961f9129f4a20ae3fc7",
            "id": 2,
            "name": "Jack Daniel's",
            "price": 160.9,
            "label": "Negra",
            "origin": "Estados Unidos",
            "year": 1915,
            "volume": 800,
            "stock": 36,
            "sku": 106860
        },
        {
            "img": [
                "https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drink_3.jpg"
            ],
            "_id": "5f88d961f9129f4a20ae3fc8",
            "id": 3,
            "name": "Johnnie Walker Red Label",
            "price": 175.9,
            "label": "Roja",
            "origin": "Escocia",
            "year": 1940,
            "volume": 750,
            "stock": 35,
            "sku": 102132
        },
        {
            "img": [
                "https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drink_4.jpg"
            ],
            "_id": "5f88d961f9129f4a20ae3fc9",
            "id": 4,
            "name": "Flor de Caña",
            "price": 39.9,
            "label": "Negra",
            "origin": "Nicaragua",
            "year": 1970,
            "volume": 750,
            "stock": 54,
            "sku": 104897
        },
        {
            "img": [
                "https://next-app-bucket-2020.s3.us-east-2.amazonaws.com/drink_5.jpg"
            ],
            "_id": "5f88d961f9129f4a20ae3fca",
            "id": 5,
            "name": "Johnnie Walker Black Label",
            "price": 189.9,
            "label": "Negra",
            "origin": "Escocia",
            "year": 1940,
            "volume": 750,
            "stock": 27,
            "sku": 104205
        }
    ]
}

const GET_DRINKS = 'GET_DRINKS';
// ===============================


// ========== Reducers ==========
export const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DRINKS:
            return { ...state, products: action.data.products }
        default:
            return state;
    }
}
// ==============================


// ========== Actions ==========
export const fetchProductsDrinkAction = () => (dispatch, getState) => {
    try {
        const { products } = getState().products;

        dispatch({
            type: GET_DRINKS,
            data: {
                products
            }
        })
    } catch (err) {
        console.error(err);
    }
}
// =============================