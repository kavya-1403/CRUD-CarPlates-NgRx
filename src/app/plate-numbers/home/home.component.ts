import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadPlateNumbers } from '../store/plate-numbers.action';
import { selectPlateNumbers } from '../store/plate-numbers.selector';
import { PlateNumbers } from '../store/plate-numbers';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private store: Store) {}
  data!:PlateNumbers
  plateNumbers$ = this.store.pipe(select(selectPlateNumbers))
 
  displayedColumns: string[] = ['plateNumber','ownerName','delete'];
  ngOnInit(): void {
    this.store.dispatch(loadPlateNumbers());
  }
}
