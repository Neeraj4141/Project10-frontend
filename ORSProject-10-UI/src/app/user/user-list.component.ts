import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.USER, locator, route);
  }

  // optional image helper (not required if direct URL used)
  imageToShow: any;

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.onload = () => {
      this.imageToShow = reader.result;
    };
    if (image) {
      reader.readAsDataURL(image);
    }
  }
}