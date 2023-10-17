import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouleteComponent } from './roulete.component';

describe('RouleteComponent', () => {
  let component: RouleteComponent;
  let fixture: ComponentFixture<RouleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouleteComponent]
    });
    fixture = TestBed.createComponent(RouleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
