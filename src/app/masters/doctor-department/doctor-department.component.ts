import { Component, OnInit } from '@angular/core';
import { MastersService } from '../masters.service';

@Component({
    selector: 'app-masters-doctor-department',
    templateUrl: './doctor-department.component.html'
})
export class DoctorDepartmentComponent implements OnInit {

    constructor(private mastersService: MastersService) { }

    ngOnInit() {
        this.mastersService.changeTitle('Doctor Department Master');
    }

}
