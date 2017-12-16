import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';

interface NavRoute {
    routeName: string;
    routeLink: string;
    routeIconClass: string;
    subRoutes: any[] | null;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    menuHidden = true;
    navRoutes: NavRoute[] = [];
    constructor(private router: Router,
        private authenticationService: AuthenticationService) {

        this.navRoutes.push({
            routeName: 'Home',
            routeLink: '/home',
            routeIconClass: 'fa fa-home',
            subRoutes: null
        });
        this.navRoutes.push({
            routeName: 'About',
            routeLink: '/about',
            routeIconClass: 'fa fa-question-circle',
            subRoutes: [{
                routeName: 'Link 1',
                routeLink: '/about'
            }, {
                routeName: 'Link2',
                routeLink: '/about'
            }]
        });
        this.navRoutes.push({
            routeName: 'Masters',
            routeLink: '/masters',
            routeIconClass: 'fa fa-question-circle',
            subRoutes: [{
                routeName: 'Department',
                routeLink: '/masters/department'
            }]
        });
    }

    ngOnInit() { }

    toggleMenu() {
        this.menuHidden = !this.menuHidden;
    }

    logout() {
        this.authenticationService.logout()
            .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
    }

    get username(): string | null {
        const credentials = this.authenticationService.credentials;
        return credentials ? credentials.username : null;
    }

}
