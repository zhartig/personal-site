import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayToolComponent } from './pay-tool.component';

describe('PayToolComponent', () => {
  let component: PayToolComponent;
  let fixture: ComponentFixture<PayToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
