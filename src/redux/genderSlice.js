import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGender = createAsyncThunk(
    'gender/fetchGender',
    async (name) => {
        const response = await axios.get(
            `https://api.genderize.io/?name=${name}`
        );
        return response.data;
    }
);

export const resetGender = createAction('gender/resetGender');

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const genderSlice = createSlice({
    name: "gender", 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchGender.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            state.data = null;
        })
        .addCase(fetchGender.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchGender.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(resetGender, (state, action) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        });
    },
});

export default genderSlice.reducer;