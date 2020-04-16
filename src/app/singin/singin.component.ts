import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  hide = true;
  myForm: FormGroup;
 
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
  this.myForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });
  }

  onSubmit() {
    return this.http.post('http://127.0.0.1:8000/api/webs/', this.myForm).subscribe(
       data => console.log(data),
       error => console.log(error),
       
    );
  
   // https://www.positronx.io/how-to-use-angular-8-httpclient-to-post-formdata/
    // console.log('Valid?', form.valid); // true or false
    // console.log('name', this.myForm.value.name);
   // console.log('password', form.value.password);
  }
}
