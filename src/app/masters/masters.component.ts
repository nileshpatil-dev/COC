import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MastersService } from './masters.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-masters',
    templateUrl: './masters.component.html'
})
export class MastersComponent implements OnInit, OnDestroy {
    titleChangedSubscription: Subscription;
    masterTitle: string;
    constructor(private mastersService: MastersService, private router: Router) { }

    ngOnInit() {
        console.log(this.router);
        this.titleChangedSubscription = this.mastersService.titleChanged.subscribe(
            (title: string) => {
                this.masterTitle = title;
            });
    }

    onComponentTitle(title: any) {
        console.log(title);
        this.masterTitle = title;
    }

    ngOnDestroy(): void {
        this.titleChangedSubscription.unsubscribe();
    }
}
