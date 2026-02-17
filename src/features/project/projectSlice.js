import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=6"
      );

      if (!response.ok) throw new Error("Failed to fetch projects");

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const addProjectAsync = createAsyncThunk(
  "projects/addProject",
  async (projectData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(projectData),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to add project");

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      /* FETCH */
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ADD */
      .addCase(addProjectAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProjectAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list.unshift(action.payload);
      })
      .addCase(addProjectAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;




// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const addProjectAsync = createAsyncThunk(
//   "projects/addProject",
//   async (projectData) => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts",
//       {
//         method: "POST",
//         body: JSON.stringify(projectData),
//         headers: {
//           "Content-type": "application/json",
//         },
//       }
//     );

//     return await response.json();
//   }
// );


// const projectSlice = createSlice({
//   name: "projects",
//   initialState: {
//     list: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//       .addCase(addProjectAsync.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addProjectAsync.fulfilled, (state, action) => {
//         state.loading = false;
//         state.list.push(action.payload);
//       })
//       .addCase(addProjectAsync.rejected, (state, action) => {
//         state.loading = false;
//         state.error = "Failed to add project";
//       });
//   },
// });

// export default projectSlice.reducer;
