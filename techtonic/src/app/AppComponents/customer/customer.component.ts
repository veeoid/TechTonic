import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerDialogBoxComponent } from '../customer-dialog-box/customer-dialog-box.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from '../../AppComponent/dialog-box/dialog-box.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  private modalService = inject(NgbModal);
  httpClient = inject(HttpClient);
  customerDetails: any;

  openCustomerDialog(): void {
    this.modalService.open(CustomerDialogBoxComponent).result.then(data => {
      if (data.event == "closed") {
        this.getCustomerDetails();
      }
    })
  }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails(): void {
    let apiUrl = "https://localhost:7224/api/Customer";
    this.httpClient.get(apiUrl).subscribe(result => {
      this.customerDetails = result;
      console.log(this.customerDetails)
    });
  }

  openConfirmDialog(customerId: any) {
    this.modalService.open(DialogBoxComponent).result.then(data => {
      console.log(data);
      if (data.event == "confirm") {
        this.deleteCustomer(customerId);
      }
    })
  }

  deleteCustomer(customerId: any) {
    let apiUrl = "https://localhost:7224/api/Customer?customerId=";
    console.log(customerId);
    this.httpClient.delete(apiUrl + customerId).subscribe()
  }

  openEditDialog(customer: any) {
    const modalReference = this.modalService.open(CustomerDialogBoxComponent);
    modalReference.componentInstance.customer = {
      customerId: customer.customerId,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      registrationDate: customer.registrationDate
    };
    modalReference.result.then(data => {
      if (data.event == "closed") {
        this.getCustomerDetails();
      }
    })
  }
}
