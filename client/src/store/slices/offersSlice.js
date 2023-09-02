import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as restController from '../../api/rest/restController'
import { pendingReducer, rejectedReducer } from '../../utils/store';

const OFFERS_SLICE_NAME = 'offers';

const initialState = {
  offers: [],
  isFetching: false,
  error: null,
};

export const getOffers = createAsyncThunk(
  `${OFFERS_SLICE_NAME}/get`,
  async (payload, {rejectedWithValue}) => {
    try {
      const { data } = await restController.getOffers();
      return data;
    } catch (error) {
      return rejectedWithValue({
        data: err?.response?.data ?? 'Gateway Timeout',
        status: err?.response?.status ?? 504
      })
    }
  }
)

const extraReducers = builder => {
  builder
    .addCase(getOffers.pending, pendingReducer)
    .addCase(getOffers.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.offers = [...payload]
    })
    .addCase(getOffers.rejected, rejectedReducer)
}

const offersSlice = createSlice({
  name: OFFERS_SLICE_NAME,
  initialState,
  extraReducers,
})

const {reducer} = offersSlice;

export default reducer;