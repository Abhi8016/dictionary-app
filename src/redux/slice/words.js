import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let error = false;
export const fetchWords = createAsyncThunk("fetchWords", async (word) => {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return response.json();
  }
  catch (err) {
    error = true
    console.log(err);

    
  }
});


const wordSlice = createSlice({
  name: "word",
  initialState: {
    isLoading: false,
    data: [],
    isError: error,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWords.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWords.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchWords.rejected, (state, action) => {
      if(error === true)
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default wordSlice.reducer;
