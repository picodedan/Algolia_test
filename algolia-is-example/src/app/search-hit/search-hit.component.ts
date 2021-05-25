import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-hit',
  templateUrl: './search-hit.component.html',
  styleUrls: ['./search-hit.component.css']
})
export class SearchHitComponent {
  @Input() hit: any;
}
