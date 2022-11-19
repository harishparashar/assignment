import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
    name: 'counter',
    initialState: {
        Productdata: [
            {
                id: 1,
                username: "Joe James",
                Category: "mobile",
                Description: "I phone 13",
                Expire_Date: "",
                Cost_Price: 50000,
                Sell_Price: 60000,
                Discount: 5000,
                Discount_Sell_Price: 2000,
                Final_Price: 55000,
            },
            {
                id: 2,
                username: "Joe James",
                Category: "mobile",
                Description: "I phone 13",
                Expire_Date: "",
                Cost_Price: 50000,
                Sell_Price: 60000,
                Discount: 5000,
                Discount_Sell_Price: 2000,
                Final_Price: 55000,
            },
            {
                id: 3,
                username: "harish",
                Category: "mobile",
                Description: "I phone 13",
                Expire_Date: "",
                Cost_Price: 50000,
                Sell_Price: 60000,
                Discount: 5000,
                Discount_Sell_Price: 2000,
                Final_Price: 55000,
            },
        ],
        product: {
            username: "",
            Category: "",
            Description: "",
            Expire_Date: "",
            Cost_Price: "",
            Sell_Price: "",
            Discount: "",
            Discount_Sell_Price: "",
            Final_Price: "",
        },
    },
    reducers: {
        getProduct: (state, action) => {
            state.product = state.Productdata.find((el) => el.id == action.payload);
        },
        clearProduct: (state) => {
            state.product = {
                username: "",
                Category: "",
                Description: "",
                Expire_Date: "",
                Cost_Price: "",
                Sell_Price: "",
                Discount: "",
                Discount_Sell_Price: "",
                Final_Price: "",
            };
        },
        addProduct: (state, action) => {
            state.Productdata = [action.payload, ...state.Productdata];
        },
        updateProduct: (state, action) => {
            state.Productdata = state.Productdata.map((el) =>
                el.id == action.payload.id ? action.payload : el
            );
        },
        deleteProduct: (state, action) => {
            state.Productdata = state.Productdata.filter((el) => el.id != action.payload);
        },
    },
})


export const { getProduct,
    clearProduct,
    addProduct,
    updateProduct,
    deleteProduct, } = ProductSlice.actions

export default ProductSlice.reducer