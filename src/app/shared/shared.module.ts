import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { DialogComponent } from './dialog/dialog.component';

const components = [
  ShellComponent,
  DialogComponent
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
})
export class SharedModule { }
