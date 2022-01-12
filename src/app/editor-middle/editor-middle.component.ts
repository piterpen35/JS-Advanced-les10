import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editor-middle',
  templateUrl: './editor-middle.component.html',
  styleUrls: ['./editor-middle.component.scss']
})
export class EditorMiddleComponent implements OnInit {
  @Input() editBoolean: boolean;
  @Output() onEditBoolean: EventEmitter<any> = new EventEmitter<any>();
  @Output() onStyleBoolean: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onBlockedBoolean: EventEmitter<any> = new EventEmitter<any>();

  editBooleanFunction(): any {
    this.onEditBoolean.emit();
  }
  styleBooleanFunction(): any {
    this.onStyleBoolean.emit();
  }
  blockedBoolean(): any {
    this.onBlockedBoolean.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
