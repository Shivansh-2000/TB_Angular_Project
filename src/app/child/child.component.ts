import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   //parent to child
   @Input()
   sname: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
