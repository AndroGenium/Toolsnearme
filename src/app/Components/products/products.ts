import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  constructor(public userService: UserService) {this.userService.loadUserRole();}



  get isGuest() {
    return this.userService.isGuest();
  }

}
