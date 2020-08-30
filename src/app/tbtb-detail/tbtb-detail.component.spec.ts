import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbtbDetailComponent } from './tbtb-detail.component';

describe('TbtbDetailComponent', () => {
  let component: TbtbDetailComponent;
  let fixture: ComponentFixture<TbtbDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbtbDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbtbDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
