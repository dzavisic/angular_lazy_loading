import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() type: string | undefined;
  @Input() title: string | undefined;
  @Input() img: string | undefined;
  @Input() description: string | undefined;
  @Input() tags: string[] | undefined;

  ngOnInit() {
  }

}
