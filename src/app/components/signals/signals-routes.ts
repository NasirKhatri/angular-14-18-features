import { Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { CartComponent } from './cart/cart.component';

const signalsRoutes: Routes = [
    {
        path: "",
        component: SignalsComponent
    },
    {
        path: "comparison",
        component: ComparisonComponent
    },
    {
        path: "cart",
        component: CartComponent
    }
]

export default signalsRoutes;