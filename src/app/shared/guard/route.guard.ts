import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {
  constructor(private readonly router: Router) {}

  canActivate(): boolean {
    return this.authorize();
  }
  canActivateChild(): boolean {
    return this.authorize();
  }

  private authorize(): boolean {
    const auth: boolean = (sessionStorage.getItem('token')) != null
    if(!auth) {
      alert('Kamu tidak ada akses di halaman ini')
      this.router.navigateByUrl('/auth/login')
    }
    return auth
  }

}
