import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCarrosComponent } from './search-carros.component';

describe('SearchCarrosComponent', () => {
  let component: SearchCarrosComponent;
  let fixture: ComponentFixture<SearchCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCarrosComponent]
    });
    fixture = TestBed.createComponent(SearchCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
