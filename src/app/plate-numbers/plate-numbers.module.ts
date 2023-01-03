import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { PlateNumbersRoutingModule } from './plate-numbers-routing.module';
import { PlateNumbersReducer } from './store/plate-numbers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlateNumbersEffect } from './store/plate-numbers.effect';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PlateNumbersRoutingModule,
    StoreModule.forFeature('myplates', PlateNumbersReducer),
    EffectsModule.forFeature([PlateNumbersEffect]),
    MatTableModule,
    MatIconModule
  ]
})
export class PlateNumbersModule { }
