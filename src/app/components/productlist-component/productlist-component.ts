import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../Models/product';
import { Subscription } from 'rxjs';
import { ProductComponent } from '../product-component/product-component';

@Component({
  selector: 'app-productlist-component',
  imports: [ProductComponent],
  templateUrl: './productlist-component.html',
  styleUrl: './productlist-component.scss',
})
export class ProductlistComponent {

  protected products = signal<Product[]>([]);
  private getproductssubscription!: Subscription;
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.getproductssubscription = this.productService.getProducts().subscribe((resp) => {
      this.products.set(resp);
    });
  }
  addProduct() {

  }
  ngOnDestroy(): void {
    this.getproductssubscription.unsubscribe();
  }


}
