import { Component, OnInit } from '@angular/core';
import { MastersService } from '../masters.service';

@Component({
    selector: 'app-masters-doctor',
    templateUrl: './doctor.component.html'
})
 export class DoctorComponent implements OnInit {

    constructor(private mastersService: MastersService) { }

    ngOnInit() {
        this.mastersService.changeTitle('Doctor Master');
    }

}
