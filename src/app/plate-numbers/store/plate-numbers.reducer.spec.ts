import * as fromReducer from './plate-numbers.reducer';
import {Action} from "@ngrx/store";
import { plateNumbersLoadedSuccessfully } from './plate-numbers.action';

describe('Plate Numbers Reducer', () => {
  const {initialState, PlateNumbersReducer} = fromReducer;
  const sampleData = {id: "1",  "plateNumber": "KAR123","ownerName": "Sam"}

  it('should return initial state if the action is unknown', () => {
    const action: Action = { type: 'Unknown' };
    const state = PlateNumbersReducer(initialState, action);
    expect(state).toBe(initialState);
  });
  describe('Plate Numbers Loaded action', function () {
    it('should have 1 plate data after loading plates',  () => {
      const action = plateNumbersLoadedSuccessfully({plateNumbers: [sampleData]});
      const state = PlateNumbersReducer(initialState, action);
      expect(state.length).toEqual(1);
      expect(state[0]).toBe(sampleData);
    });
  });
})