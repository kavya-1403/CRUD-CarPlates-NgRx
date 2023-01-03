import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { PlateNumbers } from '../store/plate-numbers';
import { invokeUpdatePlateNumberAPI } from '../store/plate-numbers.action';
import { selectPlateNumbersById } from '../store/plate-numbers.selector';

@Component({
  selector: 'app-edit-owner-name',
  templateUrl: './edit-owner-name.component.html',
  styleUrls: ['./edit-owner-name.component.css']
})
export class EditOwnerNameComponent implements OnInit {
  constructor( private route: ActivatedRoute,private router: Router,private store: Store,private appStore: Store<Appstate>){}

  plateForm: PlateNumbers = {
    id: '',
    plateNumber: '',
    ownerName: ''
  };
  ngOnInit(): void {
    let fetchData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        var id = params.get('id')!;
        return this.store.pipe(select(selectPlateNumbersById(id)));
      })
    );
    fetchData$.subscribe((data) => {
      if (data) {
        this.plateForm = { ...data };
      }
      else{
        this.router.navigate(['/']);
      }
    });
  }

  udapte() {
    this.store.dispatch(
      invokeUpdatePlateNumberAPI({ updatePlateNumber: { ...this.plateForm } })
    );
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/']);
      }
    });
  }
} 
