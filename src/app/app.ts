import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductlistComponent } from './components/productlist-component/productlist-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductlistComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('product-app-ui');
}
