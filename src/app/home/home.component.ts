import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../_models/index';
import { students } from '../dummyStudentDB';
import { User } from '../_models/index';
import { NgModule } from '@angular/core';
//import { HomePipe } from './home.pipe';

import { UserService } from '../_services/user.service';
@Component({
  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // pipes: [HomePipe]
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
 
  appendedvalue : Student;
  studentinfo:any = students; 

  courses = ['Dialysis', 'Cardiac Care', 'Medical Imaging', 'Radio Therapy', 'Sterilization-Management'];
  
  // sortByCourse = (studentinfo: Student[])=> studentinfo.sort((studentA: Student, studentB: Student) => {
  //   if(studentA.course == studentB.course) return 1;
  //   if(studentA.course != studentB.course) return 0;
  //   return -1;
  // })

  // sortedByCourse = this.sortByCourse(this.studentinfo);

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    // get users from secure api end point
    this.loadAllUsers();
    
  }
  
  
  clickMethod(editStudent : Student): void {
    this.appendedvalue = editStudent;
  }
  
  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
}

deleteUser(id: number) {
  this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
}
  
  addStudentDB(id, fullName, course: Student): void {
    
    this.studentinfo.push({"id": this.studentinfo.length+1 , "fullName": this.studentinfo.fullName, "course": this.studentinfo.course});
    console.log(id, fullName, course)
  }
  
  
  
}