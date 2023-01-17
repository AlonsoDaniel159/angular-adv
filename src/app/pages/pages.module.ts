import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule,
    FormsModule,
    NgChartsModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
