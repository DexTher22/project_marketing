import { Component } from '@angular/core';
import { ActiveProjectsComponent } from '../widgets/active-projects/active-projects.component';
import { ProjectInvitationsComponent } from '../widgets/project-invitations/project-invitations.component';
import { NewListingsComponent } from '../widgets/new-listings/new-listings.component';
import { RecentMessagesComponent } from '../widgets/recent-messages/recent-messages.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports:[
    ActiveProjectsComponent,
    ProjectInvitationsComponent,
    NewListingsComponent, 
    RecentMessagesComponent
  ]
})
export class HomeComponent {}
