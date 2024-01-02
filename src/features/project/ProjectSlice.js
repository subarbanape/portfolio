import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    project: null,
};

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProjectAsync: (state, { payload }) => {
            state.project = payload;
        },
    },
    extraReducers: (builder) => {
    },
});

export const { setProjectAsync } = projectSlice.actions;

export default projectSlice.reducer