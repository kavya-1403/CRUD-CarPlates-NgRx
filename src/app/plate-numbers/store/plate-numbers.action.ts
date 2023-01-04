import { createAction, props } from '@ngrx/store';
import { PlateNumbers } from './plate-numbers';
 
const loadPlateNumbers = createAction(
  '[Plate Numbers] Load plate numbers via service'
);
 
const plateNumbersLoadedSuccessfully = createAction(
  '[Plate Numbers] Plate Numbers loaded successfully',
  props<{ plateNumbers: PlateNumbers[] }>()
);

const invokeSaveNewPlateNumberAPI  = createAction(
  '[Plate Numbers]  save new plate number',
  props<{ newPlateNumber: any }>()
);
 
const saveNewPlateNumberAPISucess = createAction(
  '[Plate Numbers API] save new plate number api success',
  props<{ newPlateNumber: PlateNumbers }>()
);

const invokeDeletePlateNumberAPI = createAction(
  '[Plate Numbers API] Invoke delete plate number api',
  props<{id:string}>()
);
 
const deletePlateNumberAPISuccess = createAction(
  '[Plate Numbers API] plate number deleted succussfully',
  props<{id:string}>()
);
const invokeUpdatePlateNumberAPI = createAction(
  '[Plate Number API] Inovke update plate number api',
  props<{ updatePlateNumber: PlateNumbers }>()
);
 
const updatePlateNumberAPISucess = createAction(
  '[Plate Number API] update  plate number api invoked successfully',
  props<{ updatePlateNumber: PlateNumbers }>()
);

export const PlateActions = {loadPlateNumbers,plateNumbersLoadedSuccessfully,invokeSaveNewPlateNumberAPI,saveNewPlateNumberAPISucess,invokeDeletePlateNumberAPI,deletePlateNumberAPISuccess,invokeUpdatePlateNumberAPI,updatePlateNumberAPISucess}