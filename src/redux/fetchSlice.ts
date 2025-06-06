import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface FetchState<T = unknown> {
  data: T | null;
  loading: boolean;
  error: unknown;
}

const initialState: FetchState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk(
  'fetch/fetchData',
  async ({ url, options }: { url: string; options?: RequestInit }, { rejectWithValue }) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      const data = await response.json();

      const log = {
        payload: { url, method: options?.method ?? 'GET', body: options?.body ?? null },
        status: response.status,
      };
      localStorage.setItem(`fetch-log-${Date.now()}`, JSON.stringify(log));

      return data;
    } catch (err) {
      const log = {
        payload: { url, method: options?.method ?? 'GET', body: options?.body ?? null },
        status: 'error',
      };
      localStorage.setItem(`fetch-log-${Date.now()}`, JSON.stringify(log));
      return rejectWithValue(err);
    }
  }
);

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export default fetchSlice.reducer;