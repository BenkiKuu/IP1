import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes = [
        new Quote(1, 'Admin','Do not let your Hearts be trobled, trust God and trust also in me.','Jesus Christ',new Date(2018,3,14) ),
        new Quote(2, 'Admin','I am the way and the truth and the life, no one comes to the farther except through me.','Jesus Christ',new Date(2018,6,9) ),
        new Quote(3, 'Admin','For what shall it profit a man if he gains the whole world, and lose his soul','Jesus Christ',new Date(2018,1,12) ),
        new Quote(4, 'Admin','A new command I give you: love one another. As I have loved you, so you must love one another','Jesus Christ',new Date(2018,0,18) ),
        new Quote(5, 'Admin','Blessed are the mercifull for they ill be shown mercy','Jesus Christ',new Date(2018,2,14) ),
        new Quote(6, 'Admin','Let the one among you who is without sin be the first to cast a stone','Jesus Christ',new Date(2018,3,14) ),

    ]
    completeQuote(isComplete,index){

        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }

    addNewQuote(quote){
            let quoteLength = this.quotes.length;
            quote.id=quoteLength+1;
            quote.completeDate = new Date(quote.completeDate)
            this.quotes.push(quote)

          }
    toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
      }
constructor(){}

  ngOnInit() {
  }
}
