import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './fruit/home/home.component';
import { EditComponent } from './fruit/edit/edit.component';

const routes: Routes = [
  {path:'fruit/index',component:HomeComponent},
  {path:'fruit',redirectTo:'fruit',pathMatch:'full'},
  {path:'',redirectTo:'fruit',pathMatch:'full'},  
  {path:'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
