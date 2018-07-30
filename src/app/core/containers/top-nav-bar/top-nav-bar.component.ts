import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  @Output() openAside = new  EventEmitter<string>();
  @Input() state: string;
  constructor() { 
    this.state = 'open';
  }

  ngOnInit() {
  }

  open(){
    this.state = (this.state === 'open')  ? 'close' : 'open';
    this.openAside.emit(this.state)
  }
}
