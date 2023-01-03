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

export const invokeSaveNewPlateNumberAPI  = createAction(
  '[Plate Numbers]  save new plate number',
  props<{ newPlateNumber: any }>()
);
 
export const saveNewPlateNumberAPISucess = createAction(
  '[Books API] save new plate number api success',
  props<{ newPlateNumber: PlateNumbers }>()
);