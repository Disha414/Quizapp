import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizdataService {
  user_answer:string[]=[];
  constructor() { }
  
  getanswer(c:string[]){
    this.user_answer=c;
    console.log("hii",this.user_answer)
    
  }
  

  
}
