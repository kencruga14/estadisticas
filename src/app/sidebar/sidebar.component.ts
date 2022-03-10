import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'fa-solid fa-house', class: '' },
    { path: '/corners', title: 'Corners', icon: 'fa-solid fa-flag', class: '' },
    { path: '/tarjetas', title: 'Tarjetas', icon: 'fa-solid fa-tablet', class: '' },
    { path: '/goles', title: 'Goles', icon: 'fa-solid fa-futbol', class: '' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
