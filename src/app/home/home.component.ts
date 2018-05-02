import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/index';
import { students } from '../dummyStudentDB';
import { User } from '../_models/index';
import { NgModule } from '@angular/core';
import { UserService } from '../service/index';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  students: Student[] = [];
  studentinfo = students;
  appendedvalue : Student;
  courses = ['Dialysis', 'Cardiac Care', 'Medical Imaging', 'Radio Therapy', 'Sterilization Management'];
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private userService: UserService) {

   }

  ngOnInit() {
    this.loadAllUsers();
  }
  adminDeleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => { this.loadAllUsers() });
}
  
  clickMethod(editStudent : Student): void {
    this.appendedvalue = editStudent;
  }
  
  private loadAllUsers() {
    this.userService.getUsers().subscribe(users => { this.users = users; });
  }

  addStudentDB(fullName: Student): void {
    this.studentinfo.push(fullName);
  }
  
  
}
