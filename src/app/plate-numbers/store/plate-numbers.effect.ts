
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom, switchMap } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from 'src/app/shared/store/appstate';
import { PlateNumbersService } from '../plate-numbers.service';
import { loadPlateNumbers, plateNumbersLoadedSuccessfully, invokeSaveNewPlateNumberAPI,saveNewPlateNumberAPISucess, invokeDeletePlateNumberAPI, deletePlateNumberAPISuccess } from './plate-numbers.action';
import { selectPlateNumbers } from './plate-numbers.selector';
 
@Injectable()
export class PlateNumbersEffect {
  constructor(
    private actions$: Actions,
    private plateNumbersService: PlateNumbersService,
    private store: Store,
    private appStore: Store<Appstate>
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

  saveNewBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewPlateNumberAPI),
      switchMap((action:any) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.plateNumbersService.addPlates(action.newPlateNumber).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewPlateNumberAPISucess({ newPlateNumber: data });
          })
        );
      })
    );
  });

  deleteBooksAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeDeletePlateNumberAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.plateNumbersService.deletePlate(action.id).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return deletePlateNumberAPISuccess({ id: action.id });
          })
        );
      })
    );
  });
}


