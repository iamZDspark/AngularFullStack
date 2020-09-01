import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-range',
  template: `
    <div class='row'>
      <button class='col-md-4 col-sm-4' 
        [disabled]='this.value<=this.min'
        (click)='decrease()' >
        <i class="fa fa-arrow-circle-down"></i>
      </button>
      <span class='col-md-4 col-sm-4'>{{value}}</span>
      <button class='col-md-4 col-sm-4' 
      [disabled]='this.value>=this.max'
      (click)='increase()' >
      <i class="fa fa-arrow-circle-up"></i>
      </button>
    </div>
  `,
  styles: [
    `
    *{
      margin-left:0px;
      margin-right:0px;
    }
    div{
      min-width:100px;
      width:100px;
      max-width:100px;
    }
    button{
      border:0px;
      background:transparent;
    }
    `
  ]
})
export class CaRangeComponent implements OnInit {

  public value=5;
  public min=0;
  public max=10;
  public delta=1;

  constructor() { }

  ngOnInit(): void {
  }

  decrease(){
    this.change(this.value-this.delta);
  }
  increase(){
    this.change(this.value+this.delta);
  }
  change(newValue){
    if(newValue<this.min)
      newValue=this.min;
    if(newValue>this.max)
      newValue=this.max;

    this.value=newValue;
  }

}
