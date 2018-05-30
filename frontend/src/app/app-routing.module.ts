import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { TopicPageComponent } from './pages/topic-page/topic-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminSigninComponent } from './auth/admin-signin/admin-signin.component';
import { AdminSignupComponent } from './auth/admin-signup/admin-signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: AdminSigninComponent },
  { path: 'signup', component: AdminSignupComponent },
  { path: 'admin', component: AdminPageComponent, children: [
    { path: 'home', component: HomePageComponent, /* canActivate: [AuthGuard] */ },
    { path: 'topics', component: TopicPageComponent, /* canActivate: [AuthGuard] */ },
  ]}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes, {enableTracing: true})]
})

export class AppRoutingModule {}
