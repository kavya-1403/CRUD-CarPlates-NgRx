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
import { AddPlateNumbersComponent } from './add-plate-numbers/add-plate-numbers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    AddPlateNumbersComponent
  ],
  imports: [
    CommonModule,
    PlateNumbersRoutingModule,
    StoreModule.forFeature('myplates', PlateNumbersReducer),
    EffectsModule.forFeature([PlateNumbersEffect]),
    MatTableModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlateNumbersModule { }
