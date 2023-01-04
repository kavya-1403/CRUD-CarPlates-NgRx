import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {PlateNumbers} from "../store/plate-numbers";
import { AddPlateNumbersComponent } from './add-plate-numbers.component';

describe('AddPlateNumbersComponent', () => {
  let component: AddPlateNumbersComponent;
  let fixture: ComponentFixture<AddPlateNumbersComponent>;
  let store: MockStore<PlateNumbers>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [provideMockStore()],
      declarations: [ AddPlateNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlateNumbersComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
