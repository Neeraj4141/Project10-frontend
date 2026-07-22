import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fooddelivery-list',
  templateUrl: './fooddelivery-list.component.html'
})
export class FooddeliveryListComponent extends BaseListCtl {
  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.FOOD, locator, route)
  }
}
