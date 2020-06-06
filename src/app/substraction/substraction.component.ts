import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.scss']
})
export class SubstractionComponent implements OnInit {

  data: any[];

  ngOnInit(){
    this.data = [];
  
    for (var i = 0; i < 5; i++) {
        let answer = this.getRandomNumberBetween(0,100);
        let a = this.getRandomNumberBetween(answer,100);
        let b = a - answer; 
        let obj = {a: a, b:b, answer: answer};
        this.data.push(obj);
    }
   
  }

  getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

}
