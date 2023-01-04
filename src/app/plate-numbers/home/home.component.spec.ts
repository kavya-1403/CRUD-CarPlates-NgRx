import {ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { HomeComponent } from './home.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {PlateNumbers} from "../store/plate-numbers";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

         describe('HomeComponent', () => {

            let fixture: ComponentFixture<HomeComponent>;
            let home: HomeComponent;
            let store: MockStore<PlateNumbers>;
          
            beforeEach(() => {
              TestBed.configureTestingModule({
                declarations: [HomeComponent, ],
                imports: [ReactiveFormsModule],
                providers: [provideMockStore()],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
              });
              fixture = TestBed.createComponent(HomeComponent);
              home = fixture.componentInstance;
              store = TestBed.inject(MockStore);
            });
          
            it('should create the home', () => {
              expect(home).toBeTruthy();
            });
          
            it('should show 0 plates from the store when there is no data', () => {
                let tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
                expect(tableRows.length).toBe(0); 
               
            });
          
      
          
          });