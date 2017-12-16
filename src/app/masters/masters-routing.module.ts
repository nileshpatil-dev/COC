import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { MastersComponent } from './masters.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = Route.withShell([
    {
        path: 'masters', component: MastersComponent, data: { title: 'Master' },
        children: [{
            path: 'department',
            component: DepartmentComponent,
            data: { title: 'Department Master' }
        }]
    }
]);

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class MastersRoutingModule { }
