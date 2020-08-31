import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

const materialModules = [
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }
