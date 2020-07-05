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
  
    this.getData();
   
  }

  getData(): any[]{
   this.data = [];
  
    for (var i = 0; i < 5; i++) {

        let a = this.getRandomNumberBetween(0,100);
        let divisiblenumbers = [1, a];
        for (var x = 1; x<a; x++){
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
    return this.data;
  }

  getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }


}
