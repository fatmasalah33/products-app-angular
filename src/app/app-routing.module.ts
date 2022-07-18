import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
{ path: 'cart', component: CartComponent },
{ path: 'product-details/:id', component: ProductDetailsComponent },
{ path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
