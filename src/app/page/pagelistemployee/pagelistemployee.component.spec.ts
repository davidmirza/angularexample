import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagelistemployeeComponent } from './pagelistemployee.component';

describe('PagelistemployeeComponent', () => {
  let component: PagelistemployeeComponent;
  let fixture: ComponentFixture<PagelistemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagelistemployeeComponent]
    });
    fixture = TestBed.createComponent(PagelistemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
