import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/services/shared/api.service';
import { UserService } from 'src/services/user/user.service';
import { ErrorMessageHandler } from 'src/helpers/error-handler';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [ApiService , UserService , ErrorMessageHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
