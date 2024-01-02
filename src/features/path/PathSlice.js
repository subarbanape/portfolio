import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    path: 'home',
    doNavigate: false,
    source: null,
};

export const pathSlice = createSlice({
    name: 'path',
    initialState,
    reducers: {
        setPathAsync: (state, { payload }) => {
            state.path = payload.path;
            state.source = payload.source;
            state.doNavigate = true;
        },
        setParentPathAsync: (state) => {
            state.path = state.path.substring(0, state.path.lastIndexOf("/"));
            state.doNavigate = false;
        },
    },
    extraReducers: (builder) => {
    },
});

export const { setPathAsync, setParentPathAsync } = pathSlice.actions;

export default pathSlice.reducer