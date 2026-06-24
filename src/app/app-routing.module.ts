import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { SubjectComponent } from './subject/subject.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { TimetableComponent } from './timetable/timetable.component';
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
import { GymmemberComponent } from './gymmember/gymmember.component';
import { GymmemberListComponent } from './gymmember/gymmember-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'faculty',
    component: FacultyComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'marksheet',
    component: MarksheetComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'role-list',
    component: RoleListComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'college-list',
    component: CollegeListComponent
  },
  {
    path: 'course-list',
    component: CourseListComponent
  },
  {
    path: 'faculty-list',
    component: FacultyListComponent
  },
  {
    path: 'marksheet-list',
    component: MarksheetListComponent
  },
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'subject-list',
    component: SubjectListComponent
  },
  {
    path: 'timetable-list',
    component: TimetableListComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'role/:id',
    component: RoleComponent
  },
  {
    path: 'college/:id',
    component: CollegeComponent
  },
  {
    path: 'course/:id',
    component: CourseComponent
  },
  {
    path: 'faculty/:id',
    component: FacultyComponent
  },
  {
    path: 'marksheet/:id',
    component: MarksheetComponent
  },
  {
    path: 'student/:id',
    component: StudentComponent
  },
  {
    path: 'subject/:id',
    component: SubjectComponent
  },
  {
    path: 'timetable/:id',
    component: TimetableComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'myprofile',
    component: MyprofileComponent
  },
  {
    path: 'myprofile/:id',
    component: MyprofileComponent
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent
  },
  {
    path: 'marksheetmeritlist',
    component: MarksheetmeritlistComponent
  },
  {
    path: 'getmarksheet',
    component: GetmarksheetComponent
  },
  {
    path: 'gymmember',
    component: GymmemberComponent
  },
  {
    path: 'gymmember/:id',
    component: GymmemberComponent
  },
  {
    path: 'gymmember-list',
    component: GymmemberListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
