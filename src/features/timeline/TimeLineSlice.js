import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employerKey: null,
};

export const timeLineSlice = createSlice({
    name: 'timeline',
    initialState,
    reducers: {
        setEmployerAsync: (state, { payload }) => {
            state.employerKey = payload;
        },
    },
    extraReducers: (builder) => {
    },
});

export const { setEmployerAsync } = timeLineSlice.actions;

export default timeLineSlice.reducer