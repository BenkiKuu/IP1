import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
// import { FormComponent } from './form/form.component';
import { HighlightDirective } from './highlight.directive';
// import { DatePipe } from './date.pipe';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { TimeCountPipe } from './time-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    // FormComponent,
    HighlightDirective,
    QuoteDetailComponent,
    TimeCountPipe,
    QuoteFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
