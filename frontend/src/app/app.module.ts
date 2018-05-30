import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// External Resources
import { Ng4LoadingSpinnerModule } from "ng4-loading-spinner";
import { FlashMessagesModule } from "angular2-flash-messages";

// Sevices
import { AuthService } from "./services/auth.service";
import { HttpService } from "./services/http.service";
import { AuthGuard } from "./auth-guard.service";
import { AdminService } from "./services/admin.service";
import { AlertService } from "./services/alert.service";
import { MediaService } from "./services/media.service";

// Components
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SidebarComponent } from "./menu/sidebar/sidebar.component";
import { TopbarComponent } from "./menu/topbar/topbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RightSidebarComponent } from "./right-sidebar/right-sidebar.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { TopicPageComponent } from "./pages/topic-page/topic-page.component";
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { AdminSigninComponent } from "./auth/admin-signin/admin-signin.component";
import { AdminSignupComponent } from "./auth/admin-signup/admin-signup.component";
import { FileUploadComponent } from "./components/file-upload/file-upload.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    RightSidebarComponent,
    HomePageComponent,
    TopicPageComponent,
    AdminPageComponent,
    AdminSigninComponent,
    AdminSignupComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    HttpService,
    AdminService,
    AlertService,
    MediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
