import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/employee/employeeSlice";
import sliderReducer from "../features/slider/sliderSlice";
import projectReducer from "../features/project/projectSlice"
import notificationReducer from "../features/notification/notificationSlice.js"

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    slider: sliderReducer,
    projects: projectReducer,
    notifications: notificationReducer
  },
});
