import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Gallery2pgComponent } from './gallery2pg/gallery2pg.component';
import { LocationComponent } from './location/location.component';
import { MainComponent } from './main/main.component';
import { TeamComponent } from './team/team.component';

export const routes: Routes = [
  {path:'main',component: MainComponent},
  {path:'about', component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'feedback',component: FeedbackComponent},
  { path:'team',component: TeamComponent},
  {path: 'gallery',component: GalleryComponent},
  {path: 'gallery2pg',component: Gallery2pgComponent},
  {path: 'blog',component: BlogComponent},
  {path: 'location',component: LocationComponent},
  {path:"",redirectTo: 'main', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
