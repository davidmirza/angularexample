import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagelistemployeeComponent } from './page/pagelistemployee/pagelistemployee.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'Login', pathMatch:'full' },
  {path:'Home', component:PagelistemployeeComponent},
  {path:'Login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
