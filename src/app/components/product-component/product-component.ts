import { Component, input, output } from '@angular/core';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss',
})
export class ProductComponent {

  product = input.required<Product>();
  removeProductEvent = output<Product>({});

  ngOnInit(): void {

  }

  removeProduct(product: Product) {
    this.removeProductEvent.emit(product);
  }

}
