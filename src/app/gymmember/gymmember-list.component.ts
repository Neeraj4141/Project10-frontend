import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gymmember-list',
  templateUrl: './gymmember-list.component.html',
  styleUrls: ['./gymmember-list.component.css']
})
export class GymmemberListComponent extends BaseListCtl {

  constructor(locator : ServiceLocatorService, route: ActivatedRoute){
    super(locator.endpoints.GYM,locator,route)
  }

}
