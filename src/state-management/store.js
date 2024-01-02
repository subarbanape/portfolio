import { configureStore } from '@reduxjs/toolkit';
import skillSlice from '../features/skill/SkillSlice';
import logger from 'redux-logger';
import pathSlice from '../features/path/PathSlice';
import projectSlice from '../features/project/ProjectSlice';
import timeLineSlice from '../features/timeline/TimeLineSlice';

export const store = configureStore({
  reducer: {
    skillSlice: skillSlice, 
    pathSlice: pathSlice, 
    projectSlice: projectSlice, 
    timeLineSlice: timeLineSlice, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger),
});