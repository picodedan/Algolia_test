import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHitComponent } from './search-hit.component';

describe('SearchHitComponent', () => {
  let component: SearchHitComponent;
  let fixture: ComponentFixture<SearchHitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
