import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageResultsComponent } from './search-page-results.component';

describe('SearchPageResultsComponent', () => {
  let component: SearchPageResultsComponent;
  let fixture: ComponentFixture<SearchPageResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
