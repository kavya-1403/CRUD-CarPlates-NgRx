import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { PlateActions } from '../store/plate-numbers.action';
import { PlateSelectors } from '../store/plate-numbers.selector';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from 'src/app/shared/store/appstate';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router: Router, private store: Store,private appStore: Store<Appstate>) {}
  plateNumbers$ = this.store.pipe(select(PlateSelectors.selectPlateNumbers))
 
  displayedColumns: string[] = ['plateNumber','ownerName','edit','delete'];
  deleteModal: any;
  idToDelete: string = '0';
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.store.dispatch(PlateActions.loadPlateNumbers());
  }
  openDeleteModal(id: string) {
    this.idToDelete = id;
    this.deleteModal.show();
  }
  edit(id:string) {
    this.router.navigate(['/editPlates',id])
  }
  delete() {
    this.store.dispatch(
      PlateActions.invokeDeletePlateNumberAPI({
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
