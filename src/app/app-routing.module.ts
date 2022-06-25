import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouteGuard } from './shared/guard/route.guard';

const routes: Routes = [
  // eager load
  {
    path: 'home',
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    component: HomeComponent,
  },
  {
    path: 'tentang',
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    component: AboutComponent
  },
  // lazy load
  {
    path: 'pages',
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
