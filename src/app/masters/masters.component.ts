import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-master',
    templateUrl: './masters.component.html'
})
export class MastersComponent implements OnInit {

    masterTitle: string;
    constructor(private router: Router) { }

    ngOnInit() {
        this.masterTitle = this.router.url.split('/')[2] || '';
    }

}
