import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-blocked-window',
  templateUrl: './blocked-window.component.html',
  styleUrls: ['./blocked-window.component.scss']
})
export class BlockedWindowComponent implements OnInit {
  @Output() onUnBlock: EventEmitter<any> = new EventEmitter<any>();
  passwordValue: string;
  check: boolean;
  unBlock(): any{
    if (this.passwordValue === '1111') {
      this.check = false;
      this.onUnBlock.emit();
    }
    else {this.check = true; }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
