import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  QuizdataService} from "../quizdata.service";

@Component({
  selector: 'app-displayquiz',
  templateUrl: './displayquiz.component.html',
  styleUrls: ['./displayquiz.component.css'],
  providers:[QuizdataService]
})
export class DisplayquizComponent implements OnInit {
  count:number=0;
  score:number=0;
  d:number=0;
  user_answer:string[]=new Array();
  answer1:string[]=["machine","hyper text markup Language","web framework","shift + delete","programming language"];
   quiz:any[]=[
    {
        question:"Q1 : What is computer",
        p:"human",
        q:"machine",
        r:"animal",
        s:"Alien",
        ans:"answer2"
    },
    {
        question:"Q2 : What is HTML",
        p:"hyper text language",
        q:"hyper text markup language ",
        r:"hyper text transfer language",
        s:"none",
        ans:"answer2"
    },
    {
        question:"Q3 : What is angular",
        p:"web framework",
        q:"machine",
        r:"animal",
        s:"Alien",
        ans:"answer1"
    },
    {
        question:"Q4 : Which among the following is the shortcut key to delete a file without moving it into Recycle bin?",
        p:"shift + delete",
        q:"cntrl + delete",
        r:"alt + delete",
        s:"none",
        ans:"answer1"
    },
    {
        question:"Q5 : What is Python",
        p:"human",
        q:"machine",
        r:"programming language",
        s:"Alien",
        ans:"answer3"
    }
    
];
constructor(private router:Router,private qservice:QuizdataService) { }
  ngOnInit(): void {
    this.loadquestion();
   
  }
  



loadquestion() {
    (<HTMLInputElement>document.querySelector(".question")).innerHTML=this.quiz[this.count].question;
    (<HTMLInputElement>document.querySelector("#op1")).innerHTML=this.quiz[this.count].p;
    (<HTMLInputElement>document.querySelector("#op2")).innerHTML=this.quiz[this.count].q;
    (<HTMLInputElement>document.querySelector("#op3")).innerHTML=this.quiz[this.count].r;
    (<HTMLInputElement>document.querySelector("#op4")).innerHTML=this.quiz[this.count].s;
    
}
 CheckAnswer=()=>{
  const answers=document.querySelectorAll('.answer');

  let answer;
  answers.forEach((current)=>{
      if((<HTMLInputElement>current).checked){
          answer=current.id
      }
      
  })
  return answer


}
saveanswer(c:any){
  if(c=="answer1"){
    this.user_answer.push(this.quiz[this.count].p)
   
  }
  if(c=="answer2"){
    this.user_answer.push(this.quiz[this.count].q)
   
  }
  if(c=="answer3"){
    this.user_answer.push(this.quiz[this.count].r)
   
  }
  if(c=="answer4"){
    this.user_answer.push(this.quiz[this.count].s)
   
  }
  if(c==undefined){
    this.user_answer.push(" ");


  }
  
}
gohome(){
  this.router.navigate(['/home']);
    
}
submit(){
  

  
  let checkanswer=this.CheckAnswer();
    this.saveanswer(checkanswer);
    
    const c=this.quiz[this.count].ans;
    if(checkanswer==c){
        this.score++;
    }
    ++this.count;
    if(this.count<this.quiz.length){
      this.loadquestion();
  }
  else{
    this.qservice.getanswer(this.user_answer)
    this.d=1;
    const scoreview=(<HTMLInputElement>document.querySelector("#scoreview"));
      scoreview.innerHTML=`
      <h3> You scored ${this.score}/${this.quiz.length}</h3>
      <button class="btn btn-success" style="align-self: center;" type="button" id="b1" onclick="location.reload()">Refresh</button>
       `
      scoreview.classList.remove('scoreArea')
    

  }

    
  
}
getA(){
  console.log("workin")
  console.log(this.qservice.user_answer)
}

  

}
