import { createReducer, on } from "@ngrx/store";
import { PlateNumbers } from "../../plate-numbers/store/plate-numbers";
import { PlateActions } from './plate-numbers.action';

export const initialState: ReadonlyArray<PlateNumbers> = [];
 
export const PlateNumbersReducer = createReducer(
    initialState,
    on(PlateActions.plateNumbersLoadedSuccessfully, (state, action) => {
        return action.plateNumbers;
      }),
      on(PlateActions.saveNewPlateNumberAPISucess, (state, action) => {
        let newState = [...state];
        newState.unshift(action.newPlateNumber);
        return newState;
      }),
      on(PlateActions.deletePlateNumberAPISuccess, (state, { id }) => {
        let newState =state.filter((_) => _.id != id);
        return newState;
      }),
      on(PlateActions.updatePlateNumberAPISucess, (state, action) => {
        let newState = state.filter((_) => _.id != action.updatePlateNumber.id);
        newState.unshift(action.updatePlateNumber);
        return newState;
      })
);
