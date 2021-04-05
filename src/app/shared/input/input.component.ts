import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html' 
})
export class InputComponent implements OnInit, AfterContentInit {

  constructor() { }
  

  @Input() label:string;
  @Input() errorMessage:string;

  input : any;

  @ContentChild(NgModel) model: NgModel;

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model;
    if(this.input === undefined){
      throw new Error("Esse componente precisa ser usado como uma diretiva NgModel");
    }
  }

  hasError():boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
