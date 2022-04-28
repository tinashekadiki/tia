import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AddOn } from '../../models';
import { AddOnService } from '../add-on.service';

@Injectable()
export class AddOnResolver implements Resolve<AddOn> {

    constructor(private service: AddOnService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<AddOn> {
        const id = route.params['id'];
        return this.service.getFromUrl(`/addon/${id}`);
    }
}
