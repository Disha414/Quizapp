import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[DataService]
})
export class SignupComponent implements OnInit {
  constructor(private dservice:DataService,private router:Router) { }


  checkUser(){
    var flag=0;
    let email=(<HTMLInputElement>document.getElementById('inputEmail')).value;
    let password=(<HTMLInputElement>document.getElementById('inputPassword')).value;
    for(var i=0;i<this.dservice.user_array.length;i++){
      let v=this.dservice.user_array[i].email;
      let p=this.dservice.user_array[i].password;
      console.log(v);
      console.log(p)
    
      if(email==v && password==p){
         flag=1;
         break;
       }
      }
       if(flag==0){
         console.log("validity check");
         alert("Please enter valid email and password. You may use id- admin@gmail.com and password=admin123");
       }
       else{
         alert("You are signed in")
         this.router.navigate(['/instructions']);
        
      
     }
      
    

  }

  
  ngOnInit(): void {
  }

}
