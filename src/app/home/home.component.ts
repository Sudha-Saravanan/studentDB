import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../studentModel';
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
  /*currentUser: User;
  users: User[] = [];*/
  studentinfo = students;
  appendedvalue : StudentModel;
  courses = ['Dialysis', 'Cardiac Care', 'Medical Imaging', 'Radio Therapy', 'Sterilization Management'];
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private userService: UserService) {

   }

  ngOnInit() {
    
  }
  
  clickMethod(editStudent : StudentModel): void {
    this.appendedvalue = editStudent;
  }
  
}
