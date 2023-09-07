import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pendingReducer, rejectedReducer } from '../../utils/store'
import * as restController from '../../api/rest/restController';

const TRANSACTIONS_SLICE_NAME = 'transactions';

export const getTransactionsThunk = createAsyncThunk(
  `${TRANSACTIONS_SLICE_NAME}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await restController.getTransactions();
      return data
    } catch (error) {
      return rejectWithValue({error})
    }
  },
);

const initialState = {
  transactions: [],
  isFetching: false,
  error: null,
};

const extraReducers = (builder) => {
  builder.addCase(getTransactionsThunk.pending, pendingReducer)
  builder.addCase(getTransactionsThunk.fulfilled, (state, {payload}) => {
    state.isFetching = false;
    state.transactions = [...payload];
  })
  builder.addCase(getTransactionsThunk.rejected, rejectedReducer)
};

const transactionsSlice = createSlice({
  name: TRANSACTIONS_SLICE_NAME,
  initialState,
  extraReducers
})

const { reducer } = transactionsSlice;

export default reducer