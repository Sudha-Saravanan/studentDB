import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../_models';


@Pipe({ name: 'sortArrayByCourse' })
export class sortArrayByCoursePipe implements PipeTransform {
  transform(array: Student[], args: any): Student[] {
    return array.sort((a,b) =>{
        if(a.fullName>b.fullName || a.course < b.course){
            return 1;
        }
        if (a.fullName < b.fullName || a.course > b.course){
            return -1;
        }
        return 0;
    });
  }
}