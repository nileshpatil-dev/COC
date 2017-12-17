import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MastersService {
    titleChanged = new Subject<string>();
    changeTitle(title: string) {
        this.titleChanged.next(title);
    }
}
