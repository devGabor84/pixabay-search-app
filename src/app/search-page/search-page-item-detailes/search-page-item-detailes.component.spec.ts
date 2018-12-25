import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageItemDetailesComponent } from './search-page-item-detailes.component';

describe('SearchPageItemDetailesComponent', () => {
  let component: SearchPageItemDetailesComponent;
  let fixture: ComponentFixture<SearchPageItemDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageItemDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageItemDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
