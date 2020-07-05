import { Component, AfterViewInit, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent{
  data: any[];
  totalquestions: number;
  minA: number;
  maxA: number;
  minB: number;
  maxB: number;
  fixA: number;
  fixB: number;
  fontsize: number;
  numberTypeA: string;
  numberTypeB: string;

  getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
  
  getAProblem(number){
        let a = number;
        let b = number;
        if (this.numberTypeA==='Random'){ a = this.getRandomNumberBetween(this.minA,this.maxA);}
        if (this.numberTypeB==='Random'){ b = this.getRandomNumberBetween(this.minB,this.maxB);}
        let answer = a + b;
        let obj = {a: a, b:b, answer: answer};
        if (this.data.includes(obj)){
            this.getAProblem(number)
        }   else{
          this.data.push(obj);
         } 
  }

  generateQuestions(){
    this.data = [];
    for (var i = 0; i < this.totalquestions; i++) {
         this.getAProblem(i);

    }
  }

  shuffleQuestions() {
        let array = this.data;
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
  }

  
  

 
}
