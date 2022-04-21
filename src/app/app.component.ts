import { AfterViewInit, Component } from '@angular/core';
import { Product } from './common/product';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  products: Product[] = [
    {
      name: 'Cat',
      quantity: 23,
      price: 500,
    },
    {
      name: 'Hat',
      quantity: 10,
      price: 200,
    },
  ];
  ngAfterViewInit(): void {
    this.render(this.show);
  }
  show(innerHTML: string) {
    let item = document.querySelector('#list');

    if (item) {
      item.innerHTML = innerHTML;
    }
  }
  render(callback: (data: string)=> any) {
    let innerHTML = this.products.map(item => {
        return`
        <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        </tr>
        `;
      })
      .join('');

    callback(innerHTML);
  }
}
