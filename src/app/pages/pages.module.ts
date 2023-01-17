import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }