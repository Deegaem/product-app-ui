import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../Models/product';
import { Subscription } from 'rxjs';
import { ProductComponent } from '../product-component/product-component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  imports: [ProductComponent],
  templateUrl: './productlist-component.html',
  styleUrl: './productlist-component.scss',
})
export class ProductlistComponent {

  protected products = signal<Product[]>([]);
  // private getProductssubscription!: Subscription;
  // private removeProductssubscription!: Subscription;
  private productService = inject(ProductService);
  private router = inject(Router);

  ngOnInit(): void {
    this.productService.getProducts().subscribe((resp) => {
      this.products.set(resp);
    });
  }
  addProduct() {
    this.router.navigate(['product-form']);
  }
  public removeProduct(_product: any) {
    this.productService.removeProduct(_product.product_id).subscribe(() => {
      this.products.set(this.products().filter((i) => i !== _product));
    });
  }
  ngOnDestroy(): void {
    // this.getProductssubscription.unsubscribe();
    // this.removeProductssubscription.unsubscribe();
  }


}
