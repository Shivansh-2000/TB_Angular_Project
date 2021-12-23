import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LocationComponent } from './location/location.component';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { UsersService } from './services/users.service';
import { Gallery2pgComponent } from './gallery2pg/gallery2pg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,
    TeamComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    GalleryComponent,
    LocationComponent,
    ChildComponent,
    Gallery2pgComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // LightboxModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
