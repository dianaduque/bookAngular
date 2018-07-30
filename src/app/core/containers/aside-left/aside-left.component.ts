import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, animation} from "@angular/animations";
import { User } from '../../../auth/models/user/user';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css'],
  animations: [
    trigger('asideAnimation', [
      state('close', style({
        width: '100px',
      })),
      state('open', style({
        width: '300px',
      })),
            
      transition('open => close', animate('500ms')),
      transition('close => open', animate('500ms')),
    ])
  ]
})
export class AsideLeftComponent implements OnInit {
  user: User;
  @Input() asideState: string;

  constructor() { }

  ngOnInit() {
    this.user = {
      name: "test",
      lastname: "user",
      username: "diana",
      email: "usuario@correo.com",
      urlImage: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
    };
  }

}
