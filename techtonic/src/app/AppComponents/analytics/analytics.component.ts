import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-analytics',
    standalone: true,
    imports: [CommonModule, NgChartsModule],
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
    private httpClient = inject(HttpClient);

    // Dashboard data
    totalCustomers: number = 0;
    totalInventory: number = 0;
    totalValue: number = 0;
    recentCustomers: any[] = [];

    // Chart configurations
    customerGrowthChartData: ChartConfiguration<'line'>['data'] = {
        labels: [],
        datasets: [
            {
                data: [],
                label: 'Customer Growth',
                fill: true,
                tension: 0.5,
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)'
            }
        ]
    };

    inventoryDistributionChartData: ChartConfiguration<'doughnut'>['data'] = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [
                '#4f46e5',
                '#6366f1',
                '#818cf8',
                '#a5b4fc',
                '#c7d2fe'
            ]
        }]
    };

    chartOptions: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    doughnutOptions: ChartOptions<'doughnut'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    };

    ngOnInit(): void {
        this.loadDashboardData();
    }

    loadDashboardData(): void {
        // Load customer data
        this.httpClient.get('https://localhost:7224/api/Customer').subscribe(customers => {
            this.totalCustomers = (customers as any[]).length;
            this.recentCustomers = (customers as any[]).slice(-5);

            // Generate customer growth data
            const customerData = this.generateCustomerGrowthData(customers as any[]);
            this.customerGrowthChartData.labels = customerData.labels;
            this.customerGrowthChartData.datasets[0].data = customerData.data;
        });

        // Load inventory data
        this.httpClient.get('https://localhost:7224/api/Inventory').subscribe(inventory => {
            const inventoryData = this.processInventoryData(inventory as any[]);
            this.totalInventory = inventoryData.totalItems;
            this.totalValue = inventoryData.totalValue;

            // Generate inventory distribution data
            this.inventoryDistributionChartData.labels = inventoryData.categories;
            this.inventoryDistributionChartData.datasets[0].data = inventoryData.values;
        });
    }

    private generateCustomerGrowthData(customers: any[]): { labels: string[], data: number[] } {
        const sortedCustomers = [...customers].sort((a, b) =>
            new Date(a.registrationDate).getTime() - new Date(b.registrationDate).getTime()
        );

        const monthlyData = new Map<string, number>();
        sortedCustomers.forEach(customer => {
            const date = new Date(customer.registrationDate);
            const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
            monthlyData.set(monthYear, (monthlyData.get(monthYear) || 0) + 1);
        });

        return {
            labels: Array.from(monthlyData.keys()),
            data: Array.from(monthlyData.values())
        };
    }

    private processInventoryData(inventory: any[]): {
        totalItems: number,
        totalValue: number,
        categories: string[],
        values: number[]
    } {
        const categoryData = new Map<string, number>();
        let totalValue = 0;

        inventory.forEach(item => {
            const category = item.category || 'Uncategorized';
            categoryData.set(category, (categoryData.get(category) || 0) + item.quantity);
            totalValue += item.price * item.quantity;
        });

        return {
            totalItems: inventory.reduce((sum, item) => sum + item.quantity, 0),
            totalValue,
            categories: Array.from(categoryData.keys()),
            values: Array.from(categoryData.values())
        };
    }
} 