import { Injectable } from '@angular/core';

@Injectable()
export class ErrorMessageHandler {

  constructor() {}

  public showErrorMessage(err: any) {

    console.log('Exception', err);
    //this.tost.error(err);

  }
}
