import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPageItemDetailsComponent } from './saved-page-item-details.component';

describe('SavedPageItemDetailsComponent', () => {
  let component: SavedPageItemDetailsComponent;
  let fixture: ComponentFixture<SavedPageItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedPageItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPageItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
