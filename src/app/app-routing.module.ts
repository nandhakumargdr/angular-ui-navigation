import { MapsComponent } from './menu/maps/maps.component';
import { ProfileComponent } from './menu/profile/profile.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "profile", component: ProfileComponent },
  { path: "maps", component: MapsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
