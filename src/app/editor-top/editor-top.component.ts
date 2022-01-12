import {Component, Input, OnInit} from '@angular/core';
import { StyleObject } from "../app.component";

@Component({
  selector: 'app-editor-top',
  templateUrl: './editor-top.component.html',
  styleUrls: ['./editor-top.component.scss']
})
export class EditorTopComponent implements OnInit {
  @Input() styles: StyleObject;
  @Input() textAreaValue: string;

  constructor() { }
  ngOnInit(): void {}
}
