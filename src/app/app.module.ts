import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormComponent } from './form/form.component';
import { HighlightDirective } from './highlight.directive';
// import { DatePipe } from './date.pipe';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { TimeCountPipe } from './time-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    FormComponent,
    HighlightDirective,
    QuoteDetailComponent,
    TimeCountPipe

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
