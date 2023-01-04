import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlateNumbers } from './plate-numbers';
 
const selectPlateNumbers = createFeatureSelector<PlateNumbers[]>('myplates');

const selectPlateNumbersById = (id: string) =>
  createSelector(selectPlateNumbers, (plateNumbers: PlateNumbers[]) => {
    var plateNumberbyId = plateNumbers.filter((_) => _.id == id);
    if (plateNumberbyId.length == 0) {
      return null;
    }
    return plateNumberbyId[0];
  });

  export const PlateSelectors = {selectPlateNumbers,selectPlateNumbersById}
