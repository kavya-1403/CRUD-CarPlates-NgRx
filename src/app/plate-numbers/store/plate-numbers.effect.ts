import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, mergeMap, withLatestFrom, switchMap } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from 'src/app/shared/store/appstate';
import { PlateNumbersService } from '../plate-numbers.service';
import { PlateActions } from './plate-numbers.action';
import { PlateSelectors } from './plate-numbers.selector';
 
@Injectable()
export class PlateNumbersEffect {
  constructor(
    private actions$: Actions,
    private plateNumbersService: PlateNumbersService,
    private store: Store,
    private appStore: Store<Appstate>
  ) {}
 
  loadAllPlates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlateActions.loadPlateNumbers),
      withLatestFrom(this.store.pipe(select(PlateSelectors.selectPlateNumbers))),
      mergeMap(() => {
        return this.plateNumbersService.getPlateNumbers().pipe(map((data) => PlateActions.plateNumbersLoadedSuccessfully({ plateNumbers: data })));
      })
    )
  );

  saveNewPlate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlateActions.invokeSaveNewPlateNumberAPI),
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
            return PlateActions.saveNewPlateNumberAPISucess({ newPlateNumber: data });
          })
        );
      })
    );
  });
  updatePlate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlateActions.invokeUpdatePlateNumberAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.plateNumbersService.updatePlates(action.updatePlateNumber).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return PlateActions.updatePlateNumberAPISucess({ updatePlateNumber: data });
          })
        );
      })
    );
  });

  deletePlate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlateActions.invokeDeletePlateNumberAPI),
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
            return PlateActions.deletePlateNumberAPISuccess({ id: action.id });
          })
        );
      })
    );
  });
}


