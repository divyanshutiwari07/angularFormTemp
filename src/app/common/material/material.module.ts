import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatSelectModule,
  MatProgressSpinnerModule
  } from '@angular/material';

const Material = [
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ];


@NgModule({
  declarations: [],
  imports: [ Material ],
  exports: [ Material ]
})
export class MaterialModule { }
