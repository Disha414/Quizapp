import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { User } from './data';
import { DataService} from "../data.service";
import { Route, Router } from '@angular/router';




@Component({
  selector: 'app-llogin',
  templateUrl: './llogin.component.html',
  styleUrls: ['./llogin.component.css'],
  providers:[DataService]
})
export class LloginComponent implements OnInit {
  user = new User();
 

  constructor(private dservice:DataService,private router:Router) { 

  }


  ngOnInit(): void {
    
  }
  
  submit(userform:NgForm)
{
  
  console.log("form recieved",userform.value)
  let v=JSON.stringify(userform.value);
  let f=JSON.parse(v);
  console.log(f.email)
  let c={"email":f.email,"password":f.password}
  //console.log(c)
  this.dservice.getinfo(c);
  this.router.navigate(['/signup'])
  
  
}
}
