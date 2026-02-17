// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   list: [
//     { id: 1, name: "Vaishnavi", role: "Team Lead", status: "Active" },
//     { id: 2, name: "Akanksha", role: "Information Collector", status: "Active" },
//     { id: 3, name: "Sumit", role: "Frontend Developer", status: "Active" },
//   ],
//   search: "",
// };

// const employeeSlice = createSlice({
//   name: "employees",
//   initialState,
//   reducers: {
//     addEmployee: (state, action) => {
//       state.list.push({
//         id: Date.now(),
//         ...action.payload,
//       });
//     },

//     deleteEmployee: (state, action) => {
//       state.list = state.list.filter(emp => emp.id !== action.payload);
//     },

//     setSearch: (state, action) => {
//       state.search = action.payload;
//     },
//   },
// });

// export const { addEmployee, deleteEmployee, setSearch } =
//   employeeSlice.actions;

// export default employeeSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const dummyData = [
  { id: 1, name: "Vaishnavi", role: "Team Lead", status: "Active" },
  { id: 2, name: "Akanksha", role: "Information Collector", status: "Active" },
  { id: 3, name: "Sumit", role: "Frontend Developer", status: "Active" }
];

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(dummyData), 1000);
    });
  }
);

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
    loading: false,
    error: null,
    search: "",
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list.push({ id: Date.now(), ...action.payload });
    },

    deleteEmployee: (state, action) => {
      state.list = state.list.filter((emp) => emp.id !== action.payload);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load employees";
      });
  },
});

export const { addEmployee, deleteEmployee, setSearch } = employeeSlice.actions;

export default employeeSlice.reducer;
