import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadPlateNumbers, invokeDeletePlateNumberAPI, deletePlateNumberAPISuccess  } from '../store/plate-numbers.action';
import { selectPlateNumbers } from '../store/plate-numbers.selector';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from 'src/app/shared/store/appstate';
import { PlateNumbers } from '../store/plate-numbers';

declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private store: Store,private appStore: Store<Appstate>) {}
  data!:PlateNumbers
  plateNumbers$ = this.store.pipe(select(selectPlateNumbers))
 
  displayedColumns: string[] = ['plateNumber','ownerName','delete'];
  deleteModal: any;
  idToDelete: string = '0';
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.store.dispatch(loadPlateNumbers());
  }
  openDeleteModal(id: string) {
    this.idToDelete = id;
    this.deleteModal.show();
  }
  delete() {
    this.store.dispatch(
      invokeDeletePlateNumberAPI({
        id: this.idToDelete,
      })
    );
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.deleteModal.hide();
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
      }
    });
  }
}
