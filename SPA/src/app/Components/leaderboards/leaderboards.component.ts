import { Component, OnInit } from '@angular/core';
import { IUserLeaderBoard } from 'src/app/Model/IUserLeaderboard';
import { RelationshipService } from 'src/app/Services/relationship.service';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {

  public allByNetworkDimension: Array<IUserLeaderBoard> = [];
  public allByNetworkFortress: Array<IUserLeaderBoard> = [];
  public count: number = 0;

  constructor(private relationshipSvc: RelationshipService) { }

  ngOnInit(): void {
    this.getLeaderboardByNetworkDimension();
    this.getLeaderboardByNetworkFortress();
  }

  getLeaderboardByNetworkDimension() {
    this.relationshipSvc.getLeaderboardRelationshipsByNetworkDimension().subscribe((data: any) => {
      this.allByNetworkDimension = data
    });
  }

  getLeaderboardByNetworkFortress() {
    this.relationshipSvc.getLeaderboardRelationshipsByNetworkFortress().subscribe((data: any) => {
      this.allByNetworkFortress = data
    });
  }




}
