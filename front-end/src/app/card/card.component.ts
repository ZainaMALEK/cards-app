import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Card {
  id: number;
  image: string;
  title: string;
  body: string;
  edition: string;
  rarity: string;
  artist: string;

}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards :Card[]=[];
  cardIndex:number=0;

  constructor(private http: HttpClient) { }

  next(){
    this.cardIndex++;
  }

  ngOnInit() {
      this.http.get('http://localhost:8000/card/list/api')
      .subscribe((res: Card[]) => {
        this.cards = res;
        console.log(this.cards)

      })
  }

}
