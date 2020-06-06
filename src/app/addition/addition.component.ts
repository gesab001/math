import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit{
  data: any[];

  ngOnInit(){
    this.data = [];
  
    for (var i = 0; i < 5; i++) {
        let answer = this.getRandomNumberBetween(0,100);
        let a = this.getRandomNumberBetween(0,answer);
        let b = answer - a; 
        let obj = {a: a, b:b, answer: answer};
        this.data.push(obj);
    }
   
  }

  getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}
