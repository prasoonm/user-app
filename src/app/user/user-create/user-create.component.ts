import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../User';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [UserService],
})
export class UserCreateComponent implements OnInit {

  userForm: FormGroup;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: User = new User(null,
        this.userForm.controls['firstName'].value,
        this.userForm.controls['lastName'].value,
        this.userForm.controls['email'].value);
      this.userService.saveUser(user).subscribe();
    }
    this.userForm.reset();
    this.router.navigate(['/user']);
  }

  redirectToUserPage() {
    this.router.navigate(['/user']);
  }
}
