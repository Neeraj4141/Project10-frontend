import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-face-list',
  templateUrl: './face-list.component.html',
})
export class FaceListComponent extends BaseListCtl {
  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.FACE, locator, route)
  }
}
