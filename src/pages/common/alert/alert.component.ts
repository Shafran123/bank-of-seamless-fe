import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() sucess: any;
  @Input() primaryText: any = '';
  @Input() secondaryText: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
