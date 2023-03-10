import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() titleChild:string = "";
  @Input() imageChild:string = "";
  @Input() userChild:string = "";
  @Input() contentChild:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
