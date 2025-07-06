import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'terms-conditions',
        loadComponent: () => import('./pages/terms-conditions/terms-conditions.component').then(m => m.TermsConditionsComponent)
    },
    {
        path: 'privacy',
        loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent)
    },
    {
        path: "**",
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    }
];
