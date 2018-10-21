import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  rcolor: string;
  constructor() { }

  ngOnInit() {
  }

}
