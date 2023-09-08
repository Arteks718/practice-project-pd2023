import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import {
  createExtraReducers,
  decorateAsyncThunk,
  pendingReducer,
  rejectedReducer,
} from '../../utils/store';
import * as restController from '../../api/rest/restController';

const TRANSACTIONS_SLICE_NAME = 'transactions';

export const getTransactions = decorateAsyncThunk({
  key: `${TRANSACTIONS_SLICE_NAME}/get`,
  thunk: async () => {
    const { data } = await restController.getTransactions();
    return data;
  },
});

const initialState = {
  transactions: [],
  isFetching: false,
  error: null,
};

const reducers = {
  isDiscount: (state) => {
  },
};

const extraReducers = createExtraReducers({
  thunk: getTransactions,
  pendingReducer,
  fulfilledReducer: (state, { payload }) => {
    state.isFetching = false;
    state.transactions = [...payload];
  },
  rejectedReducer,
});

const transactionsSlice = createSlice({
  name: TRANSACTIONS_SLICE_NAME,
  initialState,
  reducers,
  extraReducers,
});

const { reducer, actions } = transactionsSlice;

export const { isDiscount } = actions;

export default reducer;
