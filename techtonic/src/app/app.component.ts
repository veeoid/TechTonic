import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { InventoryComponent } from './AppComponents/inventory/inventory.component';
import { CustomerComponent } from './AppComponents/customer/customer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, InventoryComponent, CustomerComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'techtonic';
}
