import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  pagetitle:string="Some other important employee:-";
  users:any;
  errorMessage:string="Loading.."
  toDate: Date = new Date(); 
 
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data)=>{
      this.users = data;
    },(_err)=>{
      this.errorMessage="Some internal issue while making API call"
    })
  }

}
