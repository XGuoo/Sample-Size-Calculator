import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  MathJaxModule} from "ngx-mathjax";
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RocComponent } from './roc/roc.component';
import { HypothesistestComponent } from './hypothesistest/hypothesistest.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SamplesizeComponent } from './samplesize/samplesize.component';

import{ MatButtonModule} from '@angular/material/button';
import{ MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FirstpageComponent,
    RocComponent,
    HypothesistestComponent,
    TopBarComponent,
    SamplesizeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MathJaxModule.forRoot(
      {
        version: '2.7.5',
        config: 'TeX-AMS_HTML',
        hostname: 'cdnjs.cloudflare.com'
      }
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

