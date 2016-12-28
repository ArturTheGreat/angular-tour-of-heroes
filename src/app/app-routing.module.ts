import {NgModule} from "@angular/core";
import {RouterModule, Route, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const heroesRoute: Route = {
  path: 'heroes',
  component: HeroesComponent
};

const heroDetailRoute: Route = {
  path: 'detail/:id',
  component: HeroDetailComponent
};

const dashboardRoute: Route = {
  path: 'dashboard',
  component: DashboardComponent
};

const dashboardRedirectRoute: Route = {
  path: '',
  redirectTo: dashboardRoute.path,
  pathMatch: 'full'
};

const routes: Routes = [dashboardRedirectRoute, dashboardRoute, heroesRoute, heroDetailRoute];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
