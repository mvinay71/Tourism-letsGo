import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"", pathMatch: "full",redirectTo:"/home"},
  {path:"home",component:HomeComponent},
  {path:"blogs",component:BlogsComponent},
  {path:"contact",component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
