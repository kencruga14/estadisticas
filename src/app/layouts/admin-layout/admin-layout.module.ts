import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { CornersComponent} from "../../pages/corners/corners.component";
import { TarjetasComponent} from "../../pages/tarjetas/tarjetas.component";
import { GolesComponent} from "../../pages/goles/goles.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    AccordionModule,
    InputTextModule,
    InputNumberModule,
    CardModule,
    FieldsetModule,
    ReactiveFormsModule,
    ButtonModule,
    FontAwesomeModule,
  ],
  declarations: [
    DashboardComponent,
    CornersComponent,
    TarjetasComponent,
    GolesComponent,
  ]
})

export class AdminLayoutModule {}
