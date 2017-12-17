import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MastersService } from '../masters.service';

@Component({
    selector: 'app-master-department',
    templateUrl: './department.component.html'
})
export class DepartmentComponent implements OnInit {
    constructor(private mastersService: MastersService) { }

    ngOnInit() {
        this.mastersService.changeTitle('Department Master');
    }

}
