import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
  selector: 'app-aside-left-menu',
  templateUrl: './aside-left-menu.component.html',
  styleUrls: ['./aside-left-menu.component.css']
})
export class AsideLeftMenuComponent implements OnInit {
  @Input() asideState: string;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getStyle(){
    var style;
    if(this.asideState == 'close'){
       style = "visibility: hidden; position: absolute; margin-right: 10px";
    }
    else
       style = "visibility: visible";

    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

}
