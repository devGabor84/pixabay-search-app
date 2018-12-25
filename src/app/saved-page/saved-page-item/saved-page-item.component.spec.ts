import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPageItemComponent } from './saved-page-item.component';

describe('SavedPageItemComponent', () => {
  let component: SavedPageItemComponent;
  let fixture: ComponentFixture<SavedPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
