import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";

import { Injectable } from "@angular/core";
import { Observable, from} from "rxjs";
import {map, take, tap} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public af: AngularFireAuth) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): Observable<boolean> {
    // Store the attempted URL for redirecting
    return this.isAuthenticated.pipe(
      tap(auth => (!auth ? this.router.navigate(['/login']) : true))
    );
  }
  
  get isAuthenticated(): Observable<boolean> {
    return this.af.authState.pipe(
      take(1),
      map(authState => !!authState)
    );
  }
}

