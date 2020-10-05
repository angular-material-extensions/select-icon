import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface MatSelectIcon {
  url: string;
  selected?: boolean;
  color?: ThemePalette;
  tags?: string[];
}

@Component({
  selector: 'mat-select-icon',
  templateUrl: './mat-select-icon.component.html',
  styleUrls: ['./mat-select-icon.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatSelectIconComponent),
      multi: true
    }
  ]
})
export class MatSelectIconComponent implements OnInit, ControlValueAccessor {

  propagateChange = (_: any) => {
  };

  @Input()
  icons: MatSelectIcon[];

  @Output()
  onIconSelected: EventEmitter<MatSelectIcon> = new EventEmitter<MatSelectIcon>();


  constructor() {
  }

  private _value: MatSelectIcon;

  get value(): MatSelectIcon {
    return this._value;
  }

  @Input()
  set value(value: MatSelectIcon) {
    this._value = value;
    this.propagateChange(this._value);
  }

  ngOnInit(): void {
  }

  select(icon: MatSelectIcon) {
    this.value = icon;
    this.onIconSelected.next(this.value);
  }

  writeValue(value: MatSelectIcon) {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

}
