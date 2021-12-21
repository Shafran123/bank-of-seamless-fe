import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { countryIbanLookup } from '../../models/IBAN_Specifications';
import flagList from '../../models/country.json';
import { inputMaskTemplate } from '../../models/inputMaskTemplate';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public IBAN = ''
  public transferAmount = 0
  public countryCode = ''
  public countryFlag: any = ''
  public balance = 0
  public length = 0
  public inputMask: any = 'AA00 0000 0000 000'
  public isAmountBlockVisible = false
  public ibanBankName = ''
  public ibanBankLogo = ''
  public transactionScuess = false
  public transactionError = false
  public errorMeasage = ''
  public loading = false;
  public percentage:any = 0

  constructor(
    private userService: UserService,
    private cdRef:ChangeDetectorRef
  ) {
  }



  ngOnInit(): void {
    console.log(countryIbanLookup);
    this.getInitialBalance()
  }

  ngAfterViewInit() {

  }

  getInitialBalance() {
    this.userService.getInitialBalance().then(res => {
      console.log(res);
      this.balance = res.data?.balance

    }).catch(err => {
      console.log(err);

    })
  }

  test(e: any) {
    console.log(e);

  }

  onChangeIBAN(e: any, ibanStatus: any) {
    this.transactionScuess = false
    this.transactionError = false
    this.isAmountBlockVisible = false
    this.IBAN = e
    console.log(e);
    if (e.length == 2) {
      this.getCountrySpecsIBAN(e)
    } else if (e.length == this.length) {
      console.log(ibanStatus);
      if (ibanStatus) {
        this.getIbanBankDetails()
      }
    }



  }


  getCountrySpecsIBAN(iban: any) {

    let countryCode = iban.toUpperCase()
    this.countryFlag = flagList.find(flag => flag.code == countryCode)?.flag;
    this.countryCode = countryIbanLookup[countryCode][0]
    this.length = countryIbanLookup[countryCode][1]
    this.inputMask = inputMaskTemplate.find(ele => ele.length == this.length)?.mask

  }

  getIbanBankDetails() {
    this.loading = true
    this.userService.getIbanBankDetails(this.IBAN).then(res => {
      console.log(res);
      this.ibanBankName = res.data.bank
      this.ibanBankLogo = res.data.logo
      this.isAmountBlockVisible = true
      this.loading = false
    }).catch(err => {
      console.log(err);
      this.loading = false
    })

  }

  onTransferClicked() {
    this.transactionScuess = false
    this.transactionError = false
    console.log('Transfer Clicked!');
    let data = {
      amount: this.transferAmount,
      currency: this.countryCode
    }

    this.userService.transferMoney(this.IBAN, data).then(res => {
      console.log(res);
      this.balance = res.data.aval_balance
      this.transactionScuess = true
      this.isAmountBlockVisible = false
        
    }).catch(err => {
      console.log(err);
      this.transactionError = true
      this.errorMeasage = err.error.error.message
    })



  }


  getPercentage(){
   this.percentage = ((100 *  this.transferAmount ) / this.balance).toFixed(2);
  }


  getPercentageStyles(){
    console.log(this.percentage );
    
    if(this.percentage < 35){
      return 'percentageGreen'
    }else if(this.percentage < 70){
      return 'percentageOrange'
    }else if(this.percentage < 100 || this.percentage > 100 ){
      return 'percentageRed'
    }
    else{
      return 'percentage'
    }
  }

  validateTranferBtn(){
    if(this.transferAmount == 0){
      return true
    }else if(this.transferAmount > this.balance ){
      return true
    }else{
      return false
    }
  }
}
