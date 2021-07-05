import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private _UsersService;
  private router;

  constructor(private _router: Router, private route: ActivatedRoute, UsersService: UsersService) {
    this._UsersService = UsersService;
    this.router = _router;
  }

  getUserName(): void {
    this.router.navigateByUrl(this._UsersService.getUserName());
  }

}
