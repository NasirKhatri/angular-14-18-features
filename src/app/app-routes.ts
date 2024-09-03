import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { DirCompositionComponent } from './components/dir-composition/dir-composition.component';
import { InputAccessComponent } from './components/input-access/input-access.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { loginGuard } from './guards/login.guard';

//
// Different procedure are used for routing guards to explain possibilites of injection directly in the route
// Moreover guards are nothing but a simple js functions
//
export const appRoutes: Routes = [
    {
        path: '', 
        redirectTo: 'directive-composition-api', 
        pathMatch: 'full'
    },
    {
        path: 'directive-composition-api', 
        component: DirCompositionComponent, 
        resolve: { color: () => 'blue' },
        canActivate: [loginGuard]
    },
    {
        path: 'signals', 
        loadChildren: () => import('./components/signals/signals-routes'),
        canActivateChild: [ (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthService).loginGuard(route, state) ],
    },
    {
        path: 'input-access/:id',
        component: InputAccessComponent,
        resolve: { color: () => 'steelblue'},
        canActivate: [() => inject(AuthService).isLoggedIn()]
    }
];
