import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((module) => module.HomeComponent),
    title: 'Nigerian Agricultural Products | bloomstead Farms'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((module) => module.AboutComponent),
    title: 'About Bloomstead Farms'
  },
  {
    path: 'commodities',
    loadComponent: () => import('./features/commodities/commodities.component').then((module) => module.CommoditiesComponent),
    title: 'Products | bloomstead Farms'
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then((module) => module.ServicesComponent),
    title: 'Services | bloomstead Farms'
  },
  {
    path: 'compliance',
    loadComponent: () => import('./features/compliance/compliance.component').then((module) => module.ComplianceComponent),
    title: 'Export Information | bloomstead Farms'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then((module) => module.ContactComponent),
    title: 'Contact | bloomstead Farms'
  },
  { path: '**', redirectTo: '' }
];
