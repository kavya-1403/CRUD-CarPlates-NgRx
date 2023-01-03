import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlateNumbers } from './plate-numbers';
 
export const selectPlateNumbers = createFeatureSelector<PlateNumbers[]>('myplates');

export const selectPlateNumbersById = (id: string) =>
  createSelector(selectPlateNumbers, (plateNumbers: PlateNumbers[]) => {
    var plateNumberbyId = plateNumbers.filter((_) => _.id == id);
    if (plateNumberbyId.length == 0) {
      return null;
    }
    return plateNumberbyId[0];
  });
