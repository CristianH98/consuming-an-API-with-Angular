import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserFormComponent } from "./user-form/user-form.component";
import { UsersListComponent } from "./users-list/users-list.component";

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'adduser', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
