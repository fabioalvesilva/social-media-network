import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginComponent } from './Components/sigin/sigin.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './Services/user.service';
import { LoginComponent } from './Components/login/login.component';
import { AccountComponent } from './Components/account/account.component';
import { UserComponent } from './Components/user/user.component';
import { AccountDetailsComponent } from './Components/account-details/account-details.component';
import { MapComponent } from './Components/map/map.component';
import { IntroductionComponent } from './Components/introduction/introduction.component';
import { RelationshipsComponent } from './Components/relationships/relationships.component';
import { RelationshipsRequestsComponent } from './Components/relationships-requests/relationships-requests.component';
import { IntroductionRequestsComponent } from './Components/introduction-requests/introduction-requests.component';
import { SuggestedfriendsComponent } from './Components/suggestedfriends/suggestedfriends.component';
import { RelationshipDetailsComponent } from './Components/relationship-details/relationship-details.component';
import { HorizontalScrollDirective } from './horizontal-scroll.directive';
import { IntroductionRequestsModalComponent } from './Components/introduction-requests-modal/introduction-requests-modal.component';
import { PostCreateComponent } from './Components/posts/post-create/post-create.component';
import { PostListComponent } from './Components/posts/post-list/post-list.component';
import { FeedComponent } from './Components/feed/feed.component';
import { ReactionComponent } from './Components/reaction/reaction.component';
import { CommentCreateComponent } from './Components/comments/comment-create/comment-create.component';
import { CommentListComponent } from './Components/comments/comment-list/comment-list.component';
import { PublicProfileComponent } from './Components/public-profile/public-profile.component';
import { TermsConditionsComponent } from './Components/terms-conditions/terms-conditions.component';
import { TagsComponent } from './Components/tags/tags.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { LeaderboardsComponent } from './Components/leaderboards/leaderboards.component';
import { SuggestedGroupsComponent } from './Components/suggested-groups/suggested-groups.component';

@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    LoginComponent,
    AccountComponent,
    UserComponent,
    AccountDetailsComponent,
    MapComponent,
    IntroductionComponent,
    RelationshipsComponent,
    RelationshipsRequestsComponent,
    IntroductionRequestsComponent,
    SuggestedfriendsComponent,
    RelationshipDetailsComponent,
    HorizontalScrollDirective,
    IntroductionRequestsModalComponent,
    PostCreateComponent,
    PostListComponent,
    FeedComponent,
    ReactionComponent,
    CommentCreateComponent,
    CommentListComponent,
    PublicProfileComponent,
    TermsConditionsComponent,
    TagsComponent,
    LeaderboardsComponent,
    SuggestedGroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    TagCloudModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full' },
      { path: 'sigin', component: SiginComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'account/:id', component: AccountComponent, pathMatch: 'full' },
      { path: 'map', component: MapComponent, pathMatch: 'full' },
      { path: 'introduction', component: IntroductionComponent, pathMatch: 'full' },
      { path: 'suggestedfriends', component: SuggestedfriendsComponent, pathMatch: 'full' },
      { path: 'relationship-details', component: RelationshipDetailsComponent, pathMatch: 'full' },
      { path: 'introduction-requests-modal', component: IntroductionRequestsModalComponent, pathMatch: 'full' },
      { path: 'profile/:id', component: PublicProfileComponent, pathMatch: 'full' },
      { path: 'tags', component: TagsComponent, pathMatch: 'full' },
      { path: 'leaderboards', component: LeaderboardsComponent, pathMatch: 'full' },
      { path: 'suggested-groups', component: SuggestedGroupsComponent, pathMatch: 'full' }
    ])
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
