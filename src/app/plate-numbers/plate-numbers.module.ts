import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { PlateNumbersRoutingModule } from './plate-numbers-routing.module';
import { PlateNumbersReducer } from './store/plate-numbers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlateNumbersEffect } from './store/plate-numbers.effect';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material/material.module';

import { AddPlateNumbersComponent } from './add-plate-numbers/add-plate-numbers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditOwnerNameComponent } from './edit/edit-owner-name.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddPlateNumbersComponent,
    EditOwnerNameComponent
  ],
  imports: [
    CommonModule,
    PlateNumbersRoutingModule,
    MaterialModule,
    StoreModule.forFeature('myplates', PlateNumbersReducer),
    EffectsModule.forFeature([PlateNumbersEffect]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlateNumbersModule { }
