import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'algolia-is-example';
  searchConfig = {
    apiKey: '9a0edeec53625ad9d14df4f4123768ac',
    appId: '8VNHUCRMHC',
    indexName: 'dev_ecommerce_sample',
    routing: true
  };
  // searchConfig = {
  //   apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
  //   appId: 'latency',
  //   indexName: 'instant_search',
  //   routing: true
  // };

  hitsPerPageConfig = [
    { value: 10, label: '10 per page', default: true },
    { value: 50, label: '50 per page' },
    { value: 100, label: '100 per page' }
  ]

  translate(items) {
    return items;
  }

}
