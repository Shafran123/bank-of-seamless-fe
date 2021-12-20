import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AngularIbanModule } from 'angular-iban';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { InputAmountComponent } from './common/input-amount/input-amount.component';
import { BtnPrimaryComponent } from './common/btn-primary/btn-primary.component';
import { AlertComponent } from './common/alert/alert.component';


@NgModule({
  declarations: [
    HomeComponent,
    InputAmountComponent,
    BtnPrimaryComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularIbanModule,
    NgxMaskModule.forRoot(),
  ]
})
export class PagesModule { }
