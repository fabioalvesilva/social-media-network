import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { OnInit, Component } from '@angular/core';
import { ITag } from 'src/app/Model/ITag';
import { ITagCount } from 'src/app/Model/ITagCount';
import { IUser } from 'src/app/Model/IUser';
import { TagService } from 'src/app/Services/tag.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'my-component',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  public userId: string = "";
  public user = {} as IUser;
  public myRelationshipTags: Array<ITag> = [];
  public allUsersTags: Array<ITagCount> = [];
  public allRelationshipTags: Array<ITagCount> = [];

  options: CloudOptions = {
    width: 800,
    height: 320,
    overflow: true,
  };

  constructor(private userSvc: UserService, private tagSvc: TagService) { }

  ngOnInit() {
    this.userId = this.getUserId();

    if (this.userId != null) {
      this.userSvc.getUserById(this.userId).subscribe((data: any) => {
        this.user = data
      });
      this.getAllRelationshipTagsByUser(this.userId);
      this.getAllUserTags();
      this.getAllRelationshipTags();
    }
  }

  getUserId(): string {
    var id = sessionStorage.getItem('id');
    if (id != null) {
      return id;
    }
    return '';
  }

  getUserEmail(): string {
    var email = sessionStorage.getItem('email');
    if (email != null) {
      return email;
    }
    return '';
  }

  getAllUserTags() {
    this.tagSvc.getAllUsersTags().subscribe((data: any) => {
      this.allUsersTags = data
    });
  }

  getAllRelationshipTags() {
    this.tagSvc.getAllRelationshipTags().subscribe((data: any) => {
      this.allRelationshipTags = data
    })
  }

  getAllRelationshipTagsByUser(id: string) {
    this.tagSvc.getAllRelationshipTagsByUser(id).subscribe((data: any) => {
      this.myRelationshipTags = data
    })
  }


  getCloudMyTags(): CloudData[] {

    var cloudMyTags: CloudData[] = []

    this.user.tags.forEach(tag => {
      cloudMyTags.push({ text: tag, weight: 1, color: this.getRandomColor() })
    });

    return cloudMyTags;
  }

  getCloudMyRelationships(): CloudData[] {

    var cloudMyRelationships: CloudData[] = []

    this.myRelationshipTags.forEach(tag => {
      cloudMyRelationships.push({ text: tag.text, weight: 1, color: this.getRandomColor() })
    });

    return cloudMyRelationships;
  }

  getCloudAllUsers(): CloudData[] {

    var cloudAllUserTags: CloudData[] = []

    this.allUsersTags.forEach(tag => {
      cloudAllUserTags.push({ text: tag.tag, weight: tag.count, color: this.getRandomColor() })
    });

    return cloudAllUserTags;
  }

  getCloudAllRelationships(): CloudData[] {

    var cloudAllRelationships: CloudData[] = []

    this.allRelationshipTags.forEach(tag => {
      cloudAllRelationships.push({ text: tag.tag, weight: tag.count, color: this.getRandomColor() })
    });

    return cloudAllRelationships;
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}