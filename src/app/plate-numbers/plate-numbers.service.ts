import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlateNumbers } from './store/plate-numbers';
@Injectable({
  providedIn: 'root'
})
export class PlateNumbersService {

  constructor(private http:HttpClient) { }
  getPlateNumbers() {
    return this.http.get<PlateNumbers[]>('http://localhost:3000/plateNumbers');
  }
}
