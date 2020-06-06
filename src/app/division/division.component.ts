import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {

data: any[];

  ngOnInit(){
    this.data = [];
  
    for (var i = 0; i < 5; i++) {
        let divisiblenumbers = [];
        let a = this.getRandomNumberBetween(0,100);
        for (var x = 0; x<a; x++){
           let result = a % x;
           if (result ===0){
               divisiblenumbers.push(x);
           }
        }
        let totaldivisible = divisiblenumbers.length;
        let randomdivisible = this.getRandomNumberBetween(0,totaldivisible);
        let b = divisiblenumbers[randomdivisible];
        let obj = {a: a, b:b, answer: a/b};
        this.data.push(obj);
    }
   
  }

  getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }


}
