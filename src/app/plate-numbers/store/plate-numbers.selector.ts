import { createFeatureSelector } from '@ngrx/store';
import { PlateNumbers } from './plate-numbers';
 
export const selectPlateNumbers = createFeatureSelector<PlateNumbers[]>('myplates');

