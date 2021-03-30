import { Component, OnInit } from '@angular/core';
import {  QuizdataService} from "../quizdata.service";

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css'],
  providers:[QuizdataService]
})
export class CreatequizComponent implements OnInit {

  constructor(private qser:QuizdataService) {
    console.log(this.qser.user_answer)
   }

  ngOnInit(): void {
  }

}
