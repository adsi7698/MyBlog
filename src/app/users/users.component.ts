import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private _UsersService;

  constructor(private route: ActivatedRoute, UsersService: UsersService) {
    this._UsersService = UsersService;
   }

  ngOnInit(): void {
    this._UsersService.assignUserName(this.route.snapshot.paramMap.get('name'));
  }

}
