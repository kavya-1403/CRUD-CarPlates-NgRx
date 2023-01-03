import { createReducer, on } from "@ngrx/store";
import { PlateNumbers } from "../../plate-numbers/store/plate-numbers";
import { plateNumbersLoadedSuccessfully, saveNewPlateNumberAPISucess } from './plate-numbers.action';

export const initialState: ReadonlyArray<PlateNumbers> = [];
 
export const PlateNumbersReducer = createReducer(
    initialState,
    on(plateNumbersLoadedSuccessfully, (state, action) => {
        return action.plateNumbers;
      }),
      on(saveNewPlateNumberAPISucess, (state, action) => {
        let newState = [...state];
        newState.unshift(action.newPlateNumber);
        return newState;
      })
);
