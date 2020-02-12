import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
=======
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ShellComponent } from './shell/shell.component';

const components = [
  ShellComponent
];

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule
];

const angularModules = [
  CommonModule,
  LayoutModule,
  RouterModule
];
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...angularModules,
    ...materialModules
  ],
  exports: [
    ...components,
    ...angularModules,
    ...materialModules
  ],
>>>>>>> 81a70f2b5204c5ba5fd0897dca76cc1b03851740
})
export class SharedModule { }
