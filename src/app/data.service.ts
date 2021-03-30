import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user_array:any[]=[{email:"dishachaubey02@gmail.com",password:"Disha123"},{email:"admin@gmail.com",password:"admin123"}];
  arr:any[]=[];
  
  getinfo(c:{}){
    this.user_array.push(c);
    console.log(this.user_array);

    
    
  }
 
  constructor() { }
}
