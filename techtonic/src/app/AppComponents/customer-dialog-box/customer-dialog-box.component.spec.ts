import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDialogBoxComponent } from './customer-dialog-box.component';

describe('CustomerDialogBoxComponent', () => {
  let component: CustomerDialogBoxComponent;
  let fixture: ComponentFixture<CustomerDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDialogBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
