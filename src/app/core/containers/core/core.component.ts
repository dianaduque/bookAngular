import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animation} from "@angular/animations";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
  animations: [
    trigger('asideAnimation', [
      state('close', style({
        marginLeft: '100px',
        width: 'calc(100% - 100px)',
      })),
      state('open', style({
        marginLeft: '300px',
        width: 'calc(100% - 300px)',
        color: "red"
      })),
      transition('open => close', animate('500ms')),
      transition('close => open', animate('500ms')),
    ])
  ]
})
export class CoreComponent implements OnInit {

  stateAside: string;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  sendState(event){
    this.stateAside = event;
  }
}
