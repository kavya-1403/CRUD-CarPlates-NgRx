import { createReducer, on } from "@ngrx/store";
import { PlateNumbers } from "../../plate-numbers/store/plate-numbers";
import { plateNumbersLoadedSuccessfully } from './plate-numbers.action';

export const initialState: ReadonlyArray<PlateNumbers> = [];
 
export const PlateNumbersReducer = createReducer(
    initialState,
    on(plateNumbersLoadedSuccessfully, (state, action) => {
        return action.plateNumbers;
      })
);
