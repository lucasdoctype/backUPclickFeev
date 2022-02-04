import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
     email: new FormControl(''),
     password: new FormControl('')
  })

  onSubmit(){

  }

  constructor(private auth: AuthenticateService) { }

  ngOnInit(): void {
  }

}
