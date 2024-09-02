import { Routes } from '@angular/router';
import { DirCompositionComponent } from './components/dir-composition/dir-composition.component';
import { InputAccessComponent } from './components/input-access/input-access.component';

export const appRoutes: Routes = [
    {
        path: '', 
        redirectTo: 'directive-composition-api', 
        pathMatch: 'full'
    },
    {
        path: 'directive-composition-api', 
        component: DirCompositionComponent, 
        resolve: { color: () => 'blue' }
    },
    {
        path: 'signals', 
        loadChildren: () => import('./components/signals/signals-routes'),
    },
    {
        path: 'input-access/:id',
        component: InputAccessComponent,
        resolve: { color: () => 'steelblue'}
    }
];
