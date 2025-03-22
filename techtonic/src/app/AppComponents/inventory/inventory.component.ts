import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogBoxComponent } from '../../AppComponent/dialog-box/dialog-box.component';

@Component({
  selector: 'app-inventory',
  imports: [FormsModule, CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  
  httpClient = inject(HttpClient) //To post the data
  productIdToDelete: number = 0;
  private modalService=inject(NgbModal)

  inventoryData = {
    productId:"",
    productName:"",
    availableQty:0,
    reorderPoint:0
  }

  disabledProductIdInput=false;

inventoryDetails: any;

  ngOnInit(){
    this.getInventoryDetails();
  }

    getInventoryDetails(){
    let apiUrl = "https://localhost:7224/api/Inventory";
    this.httpClient.get(apiUrl).subscribe(data => {
      this.inventoryDetails=data;
      console.log(this.inventoryDetails);
      
    });
    this.inventoryData = {
      productId:"",
    productName:"",
    availableQty:0,
    reorderPoint:0
    };
    this.disabledProductIdInput=false;
  }



  onSubmit():void{
    let apiUrl = "https://localhost:7224/api/Inventory";
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization:'my-auth-token',
        'Content-Type':"application/json"
      })
    }
    if (this.disabledProductIdInput){
      this.httpClient.put(apiUrl, this.inventoryData, httpOptions).subscribe({
        next: v=> console.log(v),
        error: e=> console.log(e),
        complete:()=>{
          alert('Form Submitted Sucessfully:'+JSON.stringify(this.inventoryData));
          this.ngOnInit();
        }
      });
    }
    else{
    this.httpClient.post(apiUrl, this.inventoryData, httpOptions).subscribe({
      next: v=> console.log(v),
      error: e=> console.log(e),
      complete:()=>{
        alert('Form Submitted Sucessfully:'+JSON.stringify(this.inventoryData));
        this.ngOnInit();
      }
    });
  }
    }

    openConfirmDialog(productId: number){
      this.productIdToDelete = productId;
      console.log(this.productIdToDelete);
    this.modalService.open(DialogBoxComponent).result.then((data)=>{
      if (data.event == "confirm"){
        this.deleteInventory();}
    }) .catch((dismiss) => {
      console.warn("Modal dismissed:", dismiss); // ✅ Prevents console errors
    });
    }
    deleteInventory():void{
        let apiUrl = 'https://localhost:7224/api/Inventory?productId='+this.productIdToDelete;
        this.httpClient.delete(apiUrl).subscribe(data=>{
          this.getInventoryDetails();
        });
    }

    populateFormForEdit(inventory:any){
      this.inventoryData.productId = inventory.productId;
      this.inventoryData.productName = inventory.productName;
      this.inventoryData.availableQty = inventory.availableQty;
      this.inventoryData.reorderPoint = inventory.reOrderPoint;

      this.disabledProductIdInput=true;
    }
}
 