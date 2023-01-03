import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPlateNumbersComponent } from './add-plate-numbers/add-plate-numbers.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'viewPlates',
    component: HomeComponent,
  },
  {
    path: 'addPlates',
    component: AddPlateNumbersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlateNumbersRoutingModule { }
