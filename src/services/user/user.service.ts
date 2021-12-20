import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private api: ApiService,
  ) { }


  public getInitialBalance(): Promise<any> {
    return this.api.get(`/api/v1/balance`).toPromise();
  }

  public getIbanBankDetails(iban:any): Promise<any> {
    return this.api.get(`/api/v1/bank/${iban}`).toPromise();
  }

  public transferMoney(iban:any , data:Object): Promise<any> {
    return this.api.post(`/api/v1/transfer/${iban}` , data).toPromise();
  }
}
