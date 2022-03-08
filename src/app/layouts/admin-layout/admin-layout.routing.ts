import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { CornersComponent} from "../../pages/corners/corners.component";
import { TarjetasComponent} from "../../pages/tarjetas/tarjetas.component";
import { GolesComponent} from "../../pages/goles/goles.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'corners',      component: CornersComponent },
    { path: 'tarjetas',      component: TarjetasComponent },
    { path: 'goles',      component: GolesComponent },
   
];
