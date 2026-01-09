import { Component, inject, input } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

  product = input.required<Product>();

  private productService = inject(ProductService);

  ngOnInit(): void {

  }

  productDetails(bug_id: number) {
  }
}
