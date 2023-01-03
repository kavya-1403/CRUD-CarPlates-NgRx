import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOwnerNameComponent } from './edit-owner-name.component';

describe('EditOwnerNameComponent', () => {
  let component: EditOwnerNameComponent;
  let fixture: ComponentFixture<EditOwnerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOwnerNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOwnerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
