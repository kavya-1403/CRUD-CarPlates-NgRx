export class PlateNumbersAction {
}
import { createAction, props } from '@ngrx/store';
import { PlateNumbers } from './plate-numbers';
 
export const loadPlateNumbers = createAction(
  '[Plate Numbers] Load plate numbers via service'
);
 
export const plateNumbersLoadedSuccessfully = createAction(
  '[Plate Numbers] Plate Numbers loaded successfully',
  props<{ plateNumbers: PlateNumbers[] }>()
);