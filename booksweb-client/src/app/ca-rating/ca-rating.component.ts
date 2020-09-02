import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'ca-rating',
  template: `

    <div class='starswrapper' [style.width.px]='width' >
      <div class='stars' title='{{value}}/{{max}}' >
        <div class='star' *ngFor='let star of stars' >
          <i  class="fa {{star}}"></i>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      
      .starswrapper{              
        overflow: hidden;
        
      }

      .stars{
        box-sizing:border-box;

        padding:0px;
        width:120px;
        min-width:120px;
        max-width:120px;
      }

      .star{
        display:inline;
        color:gold;        
        font-size:24px;
        margin-left:0px;
        margin-right:0px;
        padding:0px;
      }
    `
  ]
})
export class CaRatingComponent implements OnInit {
  
  @Input() public value=2.42;  //@Input suggests that this component will receive an input
  @Input() public max= 5; //what is the max allowed rating
  public stars:string [];
  private fullStar='fa-star';
  private halfStar='fa-star-half';
  public width=120;
  public maxWidth=110;
  
  constructor() { 
    


  }

  ngOnInit(): void {
    this.stars=[];
    for(let i=0;i<5;i++)
      this.stars.push(this.fullStar);
  
    this.width= this.maxWidth* this.value/this.max;
  }

  

}
