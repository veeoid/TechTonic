import { Routes } from '@angular/router';
import { InventoryComponent } from './AppComponents/inventory/inventory.component';
import { CustomerComponent } from './AppComponents/customer/customer.component';

export const routes: Routes = [{path:'inventory', component:InventoryComponent}
    ,{path:'customer', component:CustomerComponent}
];

