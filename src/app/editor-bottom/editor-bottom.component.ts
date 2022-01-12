import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableSet} from "../app.component";

@Component({
  selector: 'app-editor-bottom',
  templateUrl: './editor-bottom.component.html',
  styleUrls: ['./editor-bottom.component.scss']
})
export class EditorBottomComponent implements OnInit {
  @Input() editBoolean: boolean;
  @Input() styleBoolean: boolean;
  @Input() finalEditValue: string;

  @Input() newTable: TableSet;
  @Input() addBoolean: boolean;

  @Output() onSaveChanges: EventEmitter<any> = new EventEmitter<any>();
  @Output() onColor: EventEmitter<string> = new EventEmitter<string>();
  @Output() onBackgroundColor: EventEmitter<string> = new EventEmitter<string>();
  @Output() onFontSize: EventEmitter<string> = new EventEmitter<string>();
  @Output() onFontFamily: EventEmitter<string> = new EventEmitter<string>();
  @Output() onBoldText: EventEmitter<string> = new EventEmitter<string>();
  @Output() onItalicText: EventEmitter<string> = new EventEmitter<string>();
  @Output() onUnderLineText: EventEmitter<string> = new EventEmitter<string>();
  @Output() onAddBooleanSet: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onAddButtonValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() onTableSetValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() onListSetValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() onTest: EventEmitter<any> = new EventEmitter<any>();
  boldTextBoolean: boolean;
  italicTextBoolean: boolean;
  underLineTextBoolean: boolean;
  newColor = '';
  newBgColor = '';
  smallButtons: any[] = [
    {title: 'p', value: '<p></p>'},
    {title: 'h1', value: '<h1></h1>'},
    {title: 'h2', value: '<h2></h2>'},
    {title: 'h3', value: '<h3></h3>'},
    {title: 'h4', value: '<h4></h4>'},
    {title: 'h5', value: '<h5></h5>'},
    {title: 'h6', value: '<h6></h6>'},
    {title: 'a', value: '<a></a>'}
  ];

  saveChanges(): any {
    this.onSaveChanges.emit();
  }
  setColor(): any {
    this.onColor.emit(this.newColor);
  }
  setBackgroundColor(): any {
    this.onBackgroundColor.emit(this.newBgColor);
  }
  setFontSize(event): any{
    this.onFontSize.emit(event.target.value);
  }
  setFontFamily(event): any{
    this.onFontFamily.emit(event.target.value);
  }
  setBoldText(event): any{
    this.onBoldText.emit(event.target.value);
  }
  setItalicText(event): any{
    this.onItalicText.emit(event.target.value);
  }
  setUnderLineText(event): any {
    this.onUnderLineText.emit(event.target.value);
  }
  addBooleanSet(): any{
    this.onAddBooleanSet.emit();
  }
  addButtonValue(value: string): any{
    this.onAddButtonValue.emit(value);
  }
  addTable(event): any {
    this.onTableSetValue.emit(event);
  }
  addList(event): any{
    this.onListSetValue.emit(event);
  }
  testFunction(): any{
    this.onTest.emit(this.finalEditValue);
  }

  constructor() {}
  ngOnInit(): void {}
}
