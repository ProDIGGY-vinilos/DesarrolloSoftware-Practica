import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  example = 'Esto es un ejemplo';
  http = inject(HttpClient);
  products!: Product[];
  result!: User;

  changeExample() {
    this.example = 'Esto es otro ejemplo';
  }

  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });

    this.http
      .get<User>('https://randomuser.me/api/?nat=US')
      .subscribe((data) => {
        this.result = data;
      });
  }
}
