import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TableSet } from "../app.component";

@Component({
  selector: 'app-editor-add',
  templateUrl: './editor-add.component.html',
  styleUrls: ['./editor-add.component.scss']
})
export class EditorAddComponent implements OnInit {
  @Output() onTableSetValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() onListSetValue: EventEmitter<string> = new EventEmitter<string>();
  @Input() newTable: TableSet;
  boolean = true;
  tableSetValue = '';
  listSetValue = '';
  itemsOfListCount: number = null;
  typeOfMark = 'circle';
  typeOfMark2 = 'decimal';
  exTable = '';
  exBoolean = false;
  listStyleBoolean = true;
  createTable(): any {
      let rows = ``;
      let cell = ``;
      for (let i = 0; i < this.newTable.countCell; i++) {
        cell += `<td style="width: ${this.newTable.widthCell}px; height: ${this.newTable.heightCell}px; border: 1px solid black"></td>`;
      }
      for (let i = 0; i < this.newTable.countRow; i++) {
        rows += `<tr>${cell}</tr>`;
      }
      this.tableSetValue = `<br><table style='border: ${this.newTable.widthBorder}px ${this.newTable.typeBorder} ${this.newTable.colorBorder}'><tbody>${rows}</tbody></table>`;
      this.onTableSetValue.emit(this.tableSetValue);
  }
  createExTable(): any{
    let rows = ``;
    let cell = ``;
    for (let i = 0; i < this.newTable.countCell; i++) {
      cell += `<td style="width: ${this.newTable.widthCell}px; height: ${this.newTable.heightCell}px; border: 1px solid black"></td>`;
    }
    for (let i = 0; i < this.newTable.countRow; i++) {
      rows += `<tr>${cell}</tr>`;
    }
    this.exTable = `<br><table style='border: ${this.newTable.widthBorder}px ${this.newTable.typeBorder} ${this.newTable.colorBorder}'><tbody>${rows}</tbody></table>`;
  }
  createList(): any {
    if (this.itemsOfListCount !== null) {
      let items = '';
      for (let i = 0; i < this.itemsOfListCount; i++) {
        items += `<li>Some...</li>`;
      }
      this.listSetValue = `<br><ul type="${this.typeOfMark}">${items}<ul/>`;
      this.onListSetValue.emit(this.listSetValue);
    }
  }
  createList2(): any {
    if (this.itemsOfListCount !== null) {
      let items = '';
      for (let i = 0; i < this.itemsOfListCount; i++) {
        items += `<li>Some...</li>`;
      }
      this.listSetValue = `<br><ol style="list-style: ${this.typeOfMark2}">${items}<ol/>`;
      this.onListSetValue.emit(this.listSetValue);
    }
  }
  constructor() {
  }
  ngOnInit(): void {
  }

}
