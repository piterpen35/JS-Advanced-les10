import {Component} from '@angular/core';

export interface StyleObject {
  fontSize: string;
  fontFamily: string;
  color: string;
  backgroundColor: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
}

export interface TableSet {
  countRow: number;
  countCell: number;
  widthCell: string;
  heightCell: string;
  widthBorder: string;
  typeBorder: string;
  colorBorder: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textAreaValue = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium error eum omnis sed vitae voluptas.';
  editBoolean = false;
  styleBoolean = true;
  addBoolean = false;
  table = '';
  list = '';
  finalEditValue: string = this.textAreaValue;
  blockedBoolean = false;

  styles: StyleObject = {
    fontSize: '12px',
    fontFamily: 'Arial',
    color: 'white',
    backgroundColor: '#6d6f7e',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none'
  };
  newTable: TableSet = {
    countRow: null,
    countCell: null,
    widthCell: '',
    heightCell: '',
    widthBorder: '',
    typeBorder: 'solid',
    colorBorder: 'black'
  };

  saveChanges(): any {
    this.textAreaValue = this.finalEditValue;
  }

  onEditBoolean(): any {
    this.editBoolean = true;
    this.styleBoolean = false;
    this.addBoolean = false;
  }

  onStyleBoolean(): any {
    this.styleBoolean = true;
    this.editBoolean = false;
    this.addBoolean = false;
  }

  fontSizeSet(fontSize: string): any {
    this.styles.fontSize = fontSize;
  }

  fontFamilySet(fontFamily: string): any {
    this.styles.fontFamily = fontFamily;
  }

  colorSet(color: string): any {
    this.styles.color = color;
  }

  backgroundColorSet(color: string): any {
    this.styles.backgroundColor = color;
  }

  boldTextSet(fontWeight: string): any {
    this.styles.fontWeight = fontWeight;
  }

  italicTextSet(fontStyle: string): any {
    this.styles.fontStyle = fontStyle;
  }
  underLineTextSet(textDecoration: string): any {
    this.styles.textDecoration = textDecoration;
  }

  addTable(table: string): any {
    this.addBoolean = false;
    this.styleBoolean = false;
    this.editBoolean = true;
    this.table = table;
    this.finalEditValue = this.textAreaValue + this.table;
  }

  addList(list: string): any {
    this.addBoolean = false;
    this.styleBoolean = false;
    this.editBoolean = true;
    this.list = list;
    this.finalEditValue += this.list;
  }
  addButtonValue(value: string): any {
    this.finalEditValue += value;
  }
  test(value): any {
    this.finalEditValue = value;
  }
}
