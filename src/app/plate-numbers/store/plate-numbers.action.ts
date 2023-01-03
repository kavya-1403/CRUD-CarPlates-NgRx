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
  '[Plate Numbers API] save new plate number api success',
  props<{ newPlateNumber: PlateNumbers }>()
);

export const invokeDeletePlateNumberAPI = createAction(
  '[Plate Numbers API] Invoke delete plate number api',
  props<{id:string}>()
);
 
export const deletePlateNumberAPISuccess = createAction(
  '[Plate Numbers API] plate number deleted succussfully',
  props<{id:string}>()
);