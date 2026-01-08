import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8080/products`);
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/products/${id}`);
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8080/products`, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`http://localhost:8080/products`, product);
  }

  public removeProduct(id: number): Observable<{}> {
    return this.http.delete(`http://localhost:8080/products/${id}`);
  }

}
