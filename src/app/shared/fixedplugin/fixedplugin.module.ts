import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FixedPluginComponent } from './fixedplugin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule,NgxPayPalModule ],
    declarations: [ FixedPluginComponent ],
    exports: [ FixedPluginComponent ]
})

export class FixedPluginModule {}
