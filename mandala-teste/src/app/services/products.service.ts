import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.post<Product[]>('http://localhost:3000/clothes/getClothes', {
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }
}
