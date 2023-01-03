
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { PlateNumbersService } from '../plate-numbers.service';
import { loadPlateNumbers, plateNumbersLoadedSuccessfully } from './plate-numbers.action';
import { selectPlateNumbers } from './plate-numbers.selector';
 
@Injectable()
export class PlateNumbersEffect {
  constructor(
    private actions$: Actions,
    private plateNumbersService: PlateNumbersService,
    private store: Store
  ) {}
 
  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlateNumbers),
      withLatestFrom(this.store.pipe(select(selectPlateNumbers))),
      mergeMap(([, bookformStore]) => {
        if (bookformStore.length > 0) {
          return EMPTY;
        }
        return this.plateNumbersService.getPlateNumbers().pipe(map((data) => plateNumbersLoadedSuccessfully({ plateNumbers: data })));
      })
    )
  );

}
