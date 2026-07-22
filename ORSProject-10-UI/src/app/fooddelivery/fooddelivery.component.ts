import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fooddelivery',
  templateUrl: './fooddelivery.component.html'
})
export class FooddeliveryComponent extends BaseCtl {
  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.FOOD, locator, route)
  }

}
