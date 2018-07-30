import { Component, OnInit, Input, Output} from '@angular/core';
import { User } from '../../../auth/models/user/user';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
  selector: 'app-aside-left-user',
  templateUrl: './aside-left-user.component.html',
  styleUrls: ['./aside-left-user.component.css']
})
export class AsideLeftUserComponent implements OnInit {
  @Input() user: User;
  @Input() asideState: string;

  today: Date;
  constructor(private sanitizer: DomSanitizer) { 
    this.today = new Date();
  }

  ngOnInit() {
  }

  getStyle(){
    var style;
    if(this.asideState == 'close')
      style = "visibility: hidden; position: absolute"
    else
      style = "visibility: visible;"
    
      return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
