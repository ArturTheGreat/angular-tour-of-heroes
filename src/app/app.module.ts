import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Route, Routes} from "@angular/router";

import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {AppComponent} from "./app.component";
import {HeroService} from "./hero.service";
import {DashboardComponent} from './dashboard/dashboard.component';

const heroesRoute: Route = {
  path: 'heroes',
  component: HeroesComponent
};

const dashboardRoute: Route = {
  path: 'dashboard',
  component: DashboardComponent
};

const dashboardRedirect: Route = {
  path: '',
  redirectTo: dashboardRoute.path,
  pathMatch: 'full'
};

const routes: Routes = [dashboardRedirect, dashboardRoute, heroesRoute];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
