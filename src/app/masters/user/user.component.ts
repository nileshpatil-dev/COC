import { Component, OnInit } from '@angular/core';
import { MastersService } from '../masters.service';

@Component({
    selector: 'app-masters-user',
    templateUrl: './user.component.html'
})
 export class UserComponent implements OnInit {

    constructor(private mastersService: MastersService) { }

    ngOnInit() {
        this.mastersService.changeTitle('User Master');
    }

}
