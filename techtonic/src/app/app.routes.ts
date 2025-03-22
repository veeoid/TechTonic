import { Routes } from '@angular/router';
import { InventoryComponent } from './AppComponents/inventory/inventory.component';
import { CustomerComponent } from './AppComponents/customer/customer.component';
import { HomeComponent } from './home/home.component';
import { AnalyticsComponent } from './AppComponents/analytics/analytics.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { path: '**', redirectTo: '' }
];

