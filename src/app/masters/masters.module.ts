import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { MastersComponent } from './masters.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
    imports: [
        CommonModule,
        MastersRoutingModule
    ],
    declarations: [
        MastersComponent,
        DepartmentComponent
    ]
})
export class MastersModule { }
