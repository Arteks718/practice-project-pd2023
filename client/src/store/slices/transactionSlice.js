import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createExtraReducers, decorateAsyncThunk, pendingReducer, rejectedReducer } from '../../utils/store'
import * as restController from '../../api/rest/restController';

const TRANSACTIONS_SLICE_NAME = 'transactions';

export const getTransactions = decorateAsyncThunk({
  key: `${TRANSACTIONS_SLICE_NAME}/get`, 
  thunk: async () => {
    const { data } = await restController.getTransactions();
    return data
    }
},)

// export const getTransactionsThunk = createAsyncThunk(
//   `${TRANSACTIONS_SLICE_NAME}/get`,
//   async (payload, { rejectWithValue }) => {
//     try {

//     } catch (error) {
//       return rejectWithValue({error})
//     }
//   },
// );

const initialState = {
  transactions: [],
  isFetching: false,
  error: null,
};

const extraReducers = createExtraReducers({
  thunk: getTransactions,
  pendingReducer,
  fulfilledReducer: (state, {payload}) => {
    state.isFetching = false;
    state.transactions = [...payload];
  }, 
  rejectedReducer
})

// const extraReducers = (builder) => {
//   builder.addCase(getTransactions.pending, pendingReducer)
//   builder.addCase(getTransactions.fulfilled, (state, {payload}) => {
//     state.isFetching = false;
//     state.transactions = [...payload];
//   })
//   builder.addCase(getTransactions.rejected, rejectedReducer)
// };

const transactionsSlice = createSlice({
  name: TRANSACTIONS_SLICE_NAME,
  initialState,
  extraReducers
})

const { reducer } = transactionsSlice;

export default reducer