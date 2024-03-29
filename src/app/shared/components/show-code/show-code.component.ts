import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-code',
  templateUrl: './show-code.component.html',
  styleUrls: ['./show-code.component.scss']
})
export class ShowCodeComponent implements OnInit {
  @Input() code: any;

  constructor() {}

  ngOnInit() {}
}
