import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RoleComponent } from './role/role.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { TimetableComponent } from './timetable/timetable.component';
import { SubjectComponent } from './subject/subject.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseListComponent } from './course/course-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { StudentListComponent } from './student/student-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { MyprofileComponent } from './user/myprofile.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { MarksheetmeritlistComponent } from './marksheet/marksheetmeritlist.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';
import { AuthService } from './auth-service.service';
import { GymmemberComponent } from './gymmember/gymmember.component';
import { GymmemberListComponent } from './gymmember/gymmember-list.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { VendorComponent } from './vendor/vendor.component';
import { VendorListComponent } from './vendor/vendor-list.component';
import { DroneComponent } from './drone/drone.component';
import { DroneListComponent } from './drone/drone-list.component';
import { ParkingComponent } from './parking/parking.component';
import { ParkingListComponent } from './parking/parking-list.component';
import { FaceComponent } from './face/face.component';
import { FaceListComponent } from './face/face-list.component';
import { FooddeliveryComponent } from './fooddelivery/fooddelivery.component';
import { FooddeliveryListComponent } from './fooddelivery/fooddelivery-list.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    UserComponent,
    StudentComponent,
    CollegeComponent,
    CourseComponent,
    TimetableComponent,
    SubjectComponent,
    MarksheetComponent,
    FacultyComponent,
    FooterComponent,
    NavbarComponent,
    RoleListComponent,
    UserListComponent,
    CollegeListComponent,
    CourseListComponent,
    FacultyListComponent,
    MarksheetListComponent,
    StudentListComponent,
    TimetableListComponent,
    SubjectListComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    MyprofileComponent,
    ChangepasswordComponent,
    MarksheetmeritlistComponent,
    GetmarksheetComponent,
    GymmemberComponent,
    GymmemberListComponent,
    VendorComponent,
    VendorListComponent,
    DroneComponent,
    DroneListComponent,
    ParkingComponent,
    ParkingListComponent,
    FaceComponent,
    FaceListComponent,
    FooddeliveryComponent,
    FooddeliveryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    },
    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService,
    AuthenticatorResponse
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
