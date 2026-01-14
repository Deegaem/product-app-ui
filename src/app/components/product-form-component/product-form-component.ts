import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form-component.html',
  styleUrl: './product-form-component.scss',
})
export class ProductFormComponent {
  productForm: FormGroup;
  private productService = inject(ProductService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      product_name: ['', Validators.required],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.addProduct();
    }
  }
  private addProduct() {
    this.productService.addProduct(this.productForm.value).subscribe(() => {
      this.productForm.reset();
      this.router.navigate(['products']);
    });
  }
  back() {
    this.router.navigate(['products']);
  }
}
