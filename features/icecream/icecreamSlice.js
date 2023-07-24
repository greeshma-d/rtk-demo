const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    numOfIcecream: 10,
}

const icecreamSlice = createSlice({
    name: "IceCream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecream--;
        },
        restocked: (state, action) => {
            state.numOfIcecream = state.numOfIcecream + action.payload;
        }
    }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;