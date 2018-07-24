import { Component, OnInit, Input, Output} from '@angular/core';
import { User } from '../../../auth/models/user/user';

@Component({
  selector: 'app-aside-left-user',
  templateUrl: './aside-left-user.component.html',
  styleUrls: ['./aside-left-user.component.css']
})
export class AsideLeftUserComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
