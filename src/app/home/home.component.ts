import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../_models/index';
import { students } from '../dummyStudentDB';
import { User } from '../_models/index';
import { NgModule } from '@angular/core';
//import { UserService } from '../service/index';
import { UserService } from '../_services/user.service';
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  
  studentinfo = students;
  appendedvalue : Student;
  

  
  
  courses = ['Dialysis', 'Cardiac Care', 'Medical Imaging', 'Radio Therapy', 'Sterilization-Management'];
  submitted = false;
  
  onSubmit() { this.submitted = true; }

  constructor(private userService: UserService) {

   }

  ngOnInit() {
    // get users from secure api end point
    this.userService.getUsers()
    .subscribe(users => {
        this.users = users;
    });
    //this.loadAllUsers();
  }
  // adminDeleteUser(id: number) {
  //   this.userService.deleteUser(id).subscribe(() => { this.loadAllUsers() });
  // }
  
  clickMethod(editStudent : Student): void {
    this.appendedvalue = editStudent;
  }
  
  // private loadAllUsers() {

  //   this.userService.getUsers().subscribe(users => { this.users = users; });
  // }
  
  addStudentDB(id, fullName, course: Student): void {
    
    this.studentinfo.push({"id": this.studentinfo.length+1 , "fullName": this.studentinfo.fullName, "course": this.studentinfo.course});
    
  }
  
  
  
}
