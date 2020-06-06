import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent implements OnInit {

 data: any[];

  ngOnInit(){
    this.data = [];
  
    for (var i = 0; i < 5; i++) {

        let a = this.getRandomNumberBetween(0,50);
        let b = 0;
        let answer = 0;
        while (answer<100){
            b += 1;
            answer = a * b;
            
        }
        if (answer>100){
           b = b - 1;
           answer = a * b;
        } 

        let obj = {a: a, b:b, answer: answer};
        this.data.push(obj);
    }
   
  }

  getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

}
