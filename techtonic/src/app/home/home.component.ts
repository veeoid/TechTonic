import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    features = [
        {
            title: 'Inventory Management',
            description: 'Efficiently manage your stock levels and track inventory movements',
            icon: '📦',
            route: '/inventory'
        },
        {
            title: 'Customer Management',
            description: 'Handle customer relationships and track customer data',
            icon: '👥',
            route: '/customer'
        },
        {
            title: 'Analytics Dashboard',
            description: 'Get insights into your business performance',
            icon: '📊',
            route: '/analytics'
        }
    ];
} 