import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlateNumbersComponent } from './add-plate-numbers.component';

describe('AddPlateNumbersComponent', () => {
  let component: AddPlateNumbersComponent;
  let fixture: ComponentFixture<AddPlateNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlateNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlateNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
