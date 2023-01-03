import {TestBed, waitForAsync} from "@angular/core/testing";
import {PlateNumbersEffect} from "./plate-numbers.effect";
import {provideMockActions} from "@ngrx/effects/testing";
import {Observable, of} from "rxjs";
import {provideMockStore} from "@ngrx/store/testing";
import {initialState} from "./plate-numbers.reducer";
import {PlateNumbersService} from "../plate-numbers.service";
import {Store} from "@ngrx/store";
import {loadPlateNumbers,plateNumbersLoadedSuccessfully,saveNewPlateNumberAPISucess} from "./plate-numbers.action";
import {HttpClientModule} from "@angular/common/http";

describe("Effects", () => {
    
    let actions$: Observable<any>
    let effects: PlateNumbersEffect
    let store: Store
    let plateNumbersService: PlateNumbersService
  
   
    const plates = 

    [
           {
             "id": "1",
             "plateNumber": "KAR123",
             "ownerName": "Sam"
           },
           {
             "id": "2",
             "plateNumber": "MAN234",
             "ownerName": "Alice"
           },
           {
             "id": "3",
             "plateNumber": "HYD789",
             "ownerName": "Bob"
           },
           {
             "id": "4",
             "plateNumber": "CHN456",
             "ownerName": "David"
           },
           {
             "id": "5",
             "plateNumber": "TRI567",
             "ownerName": "John"
           }
         ]
    const sampleData = {id: "1",  "plateNumber": "KAR123","ownerName": "Sam"}
    beforeEach(() => {
       
      TestBed.configureTestingModule({
        providers: [
            PlateNumbersEffect,
          provideMockActions(() => actions$),
          provideMockStore({initialState}),
        ],
        imports: [HttpClientModule]
      })
      plateNumbersService = TestBed.inject(PlateNumbersService)
      effects = TestBed.inject(PlateNumbersEffect)
      store = TestBed.inject(Store)
    })

    describe('getPlates action', function () {
      it("should call getPlateNumbers and redirect to plateNumbersLoadedSuccessfully action", () => {
        spyOn(plateNumbersService, "getPlateNumbers").and.returnValue(of(plates))
        actions$ = of(loadPlateNumbers);
        effects.loadAllPlates$.subscribe( res => {    
          expect(plateNumbersService.getPlateNumbers).toHaveBeenCalled()
          expect(res).toEqual(plateNumbersLoadedSuccessfully({plateNumbers: plates}))
        })
        
      })
    });

    describe('savePlate action', function () {
      it("should call addPlates and redirected to saveNewPlateNumberAPISucess action", waitForAsync(() => {
        spyOn(plateNumbersService, "addPlates").and.returnValue(of(sampleData));
        actions$ = of(saveNewPlateNumberAPISucess({newPlateNumber: sampleData}))
        effects.saveNewPlate$.subscribe(res => {
          expect(plateNumbersService.addPlates).toHaveBeenCalled()
          expect(res).toEqual(saveNewPlateNumberAPISucess({newPlateNumber: sampleData}))
         
        })
      }))
    });
  
  })