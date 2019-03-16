import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { InputSelectMultipleComponent } from './components/input-select-multiple/input-select-multiple.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputComponent, InputSelectComponent, InputSelectMultipleComponent],
  exports: [InputComponent, InputSelectComponent, InputSelectMultipleComponent]
})
export class SharedModule { }
