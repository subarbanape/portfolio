import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    skill: null,
};

export const skillSlice = createSlice({
    name: 'skill',
    initialState,
    reducers: {
        setSkillAsync: (state, { payload }) => {
            state.skill = payload;
        },
    },
    extraReducers: (builder) => {
    },
});

export const { setSkillAsync } = skillSlice.actions;

export default skillSlice.reducer