import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  standalone:true,
  imports: [],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent {
  modal = inject(NgbActiveModal)
  confirm(){
    this.modal.close({event:"confirm"});
  
  }
  cancel() {
    this.modal.dismiss({ event: "cancel" });
  }
}

