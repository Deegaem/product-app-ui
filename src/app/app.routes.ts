import { Routes } from '@angular/router';
import { ProductlistComponent } from './components/productlist-component/productlist-component';
import { ProductFormComponent } from './components/product-form-component/product-form-component';

export const routes: Routes = [
    { path: '', component: ProductlistComponent },
    { path: 'products', component: ProductlistComponent },
    { path: 'product-form', component: ProductFormComponent }
];
