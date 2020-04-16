import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() { }
  submitForm() {
    var formData: any = new FormData();
    formData.append("email", this.form.get('email').value);
    formData.append("password", this.form.get('password').value);

    this.http.post('http://127.0.0.1:8000/api/login', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
   
    console.log('email', this.form.value.email);
    console.log('password', this.form.value.password);
  }


}


//https://www.concretepage.com/angular/angular-httpclient-post