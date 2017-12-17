import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { MastersComponent } from './masters.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorDepartmentComponent } from './doctor-department/doctor-department.component';
import { UserComponent } from './user/user.component';
import { MastersService } from './masters.service';

@NgModule({
    imports: [
        CommonModule,
        MastersRoutingModule
    ],
    declarations: [
        MastersComponent,
        DepartmentComponent,
        DoctorComponent,
        UserComponent,
        DoctorDepartmentComponent
    ],
    providers: [MastersService]
})
export class MastersModule { }
