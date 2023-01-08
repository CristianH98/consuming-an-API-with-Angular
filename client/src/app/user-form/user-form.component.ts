import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
    this.user = new User();
   }

  goToUserList(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
    this.userService.saveUser(this.user).subscribe(result => this.goToUserList());
  }

}
