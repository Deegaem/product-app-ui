import { Component, inject, input } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss',
})
export class ProductComponent {

  product = input.required<Product>();

  private productService = inject(ProductService);

  ngOnInit(): void {

  }

  productDetails(id: number) {
  }

}
