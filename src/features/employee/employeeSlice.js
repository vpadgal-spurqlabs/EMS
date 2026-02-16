import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, name: "Vaishnavi", role: "Team Lead", status: "Active" },
    { id: 2, name: "Akanksha", role: "Information Collector", status: "Active" },
    { id: 3, name: "Sumit", role: "Frontend Developer", status: "Active" },
  ],
  search: "",
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push({
        id: Date.now(),
        ...action.payload,
      });
    },

    deleteEmployee: (state, action) => {
      state.list = state.list.filter(emp => emp.id !== action.payload);
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addEmployee, deleteEmployee, setSearch } =
  employeeSlice.actions;

export default employeeSlice.reducer;
