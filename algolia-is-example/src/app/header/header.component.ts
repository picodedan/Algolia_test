import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items = [
    { name: 'dev_ecommerce_sample', label: 'Most relevant' },
    { name: 'dev_ecommerce_price_asc', label: 'Lowest price' },
    { name: 'dev_ecommerce_rating_desc', label: 'Highest Rating' }
  ];

}
