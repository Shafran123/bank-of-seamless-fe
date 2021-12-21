import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.scss']
})
export class BtnPrimaryComponent implements OnInit {

  @Input() currency: any;
  @Input() isDisable: any;
  
 
  @Output() onButtonClick = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }


  onClickBtn(){    
    this.onButtonClick.emit()
  }
}
