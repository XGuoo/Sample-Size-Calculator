import { Component, OnInit } from '@angular/core';
// import { Mode, modes } from './mode';

import { FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  

  ss:boolean=false;

  cp:boolean =false;

  public selecss(){
    this.ss =true;
    this.cp=false;
    
  }

  public seleccp(){
    this.ss =false;
    this.cp=true;

  }


  constructor() { }

  ngOnInit() {



  }

}