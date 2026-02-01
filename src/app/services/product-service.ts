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
    return this.http.get<Product[]>(`https://product-app.ch/products`);
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`https://product-app.ch/products/${id}`);
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`https://product-app.ch/products`, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`https://product-app.ch/products`, product);
  }

  public removeProduct(id: String): Observable<{}> {
    return this.http.delete(`https://product-app.ch/products/${id}`);
  }

}
