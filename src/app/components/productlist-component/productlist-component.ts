import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../Models/product';
import { Subscription } from 'rxjs';
import { ProductComponent } from '../product-component/product-component';

@Component({
  selector: 'app-productlist',
  imports: [ProductComponent],
  templateUrl: './productlist-component.html',
  styleUrl: './productlist-component.scss',
})
export class ProductlistComponent {

  protected products = signal<Product[]>([]);
  private getProductssubscription!: Subscription;
  private removeProductssubscription!: Subscription;
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.getProductssubscription = this.productService.getProducts().subscribe((resp) => {
      this.products.set(resp);
    });
  }
  addProduct() {

  }
  public removeProduct(_product: any) {
    this.removeProductssubscription = this.productService.removeProduct(_product.id).subscribe(() => {
      this.products.set(this.products().filter((i) => i !== _product));
    });
  }
  ngOnDestroy(): void {
    this.getProductssubscription.unsubscribe();
    this.removeProductssubscription.unsubscribe();
  }


}
