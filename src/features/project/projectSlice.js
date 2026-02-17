import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addProjectAsync = createAsyncThunk(
  "projects/addProject",
  async (projectData) => {
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

    return await response.json();
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
      .addCase(addProjectAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProjectAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(addProjectAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to add project";
      });
  },
});

export default projectSlice.reducer;
