import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './Components/account/account.component';
import { LoginComponent } from './Components/login/login.component';
import { SiginComponent } from './Components/sigin/sigin.component';
import { AccountDetailsComponent } from './Components/account-details/account-details.component';
import { MapComponent } from './Components/map/map.component';
import { IntroductionComponent } from './Components/introduction/introduction.component';
import { RelationshipsComponent } from './Components/relationships/relationships.component';
import { RelationshipsRequestsComponent } from './Components/relationships-requests/relationships-requests.component';
import { IntroductionRequestsComponent } from './Components/introduction-requests/introduction-requests.component';
import { SuggestedfriendsComponent } from './Components/suggestedfriends/suggestedfriends.component';
import { UserComponent } from './Components/user/user.component';
import { RelationshipDetailsComponent } from './Components/relationship-details/relationship-details.component';
import { IntroductionRequestsModalComponent } from './Components/introduction-requests-modal/introduction-requests-modal.component';
import { PostCreateComponent } from './Components/posts/post-create/post-create.component';
import { PostListComponent } from './Components/posts/post-list/post-list.component';
import { FeedComponent } from './Components/feed/feed.component';
import { PublicProfileComponent } from './Components/public-profile/public-profile.component';
import { TermsConditionsComponent } from './Components/terms-conditions/terms-conditions.component';
import { TagsComponent } from './Components/tags/tags.component';
import { LeaderboardsComponent } from './Components/leaderboards/leaderboards.component';
import {SuggestedGroupsComponent} from "./Components/suggested-groups/suggested-groups.component";

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sigin', component: SiginComponent },
    { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'account/:id', component: AccountComponent, children: [
      { path: 'suggestedfriends', component: SuggestedfriendsComponent },
          { path: 'suggested-groups', component: SuggestedGroupsComponent, pathMatch: 'full' },
      { path: 'account-details', component: AccountDetailsComponent },
      { path: 'map', component: MapComponent },
      { path: 'feed', component: FeedComponent, children: [
        { path: 'posts', component: PostListComponent },
        { path: 'post-create', component: PostCreateComponent }
        ]
      },
      { path: 'profile/:id', component: PublicProfileComponent },
      { path: 'introduction', component: IntroductionComponent },
      { path: 'tags', component: TagsComponent },
      { path: 'relationships', component: RelationshipsComponent, children:[
        { path: 'relationship-details', component: RelationshipDetailsComponent, pathMatch: 'full' }]
      },
      { path: 'relationships-requests', component: RelationshipsRequestsComponent },
      { path: 'introduction-requests', component: IntroductionRequestsComponent},
      { path: 'leaderboards', component: LeaderboardsComponent},
      { path: 'user', component: UserComponent, children: [
          { path: 'introduction-requests-modal', component: IntroductionRequestsModalComponent, pathMatch: 'full' }]}
        ]
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
