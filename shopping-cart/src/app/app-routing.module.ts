import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { StepperComponent}  from './components/stepper/stepper.component';

const routes: Routes =[
 {path:'',redirectTo:'/shop',pathMatch:'full'},
 {path:'shop',component:ShoppingCartComponent},
 {path:'checkout',component:CheckOutComponent},
 {path: 'stepper',component:StepperComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}