import { Component, inject } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-toursim',
 imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './toursim.html',
  styleUrl: './toursim.css'
})
export class Toursim {

  photoGeneratedURL:string = "https://picsum.photos/200";
  // selectedFile:File | null;
  url:string="";
  private http = inject(HttpClient);

  form = new FormGroup({
    placeName: new FormControl('',{validators: [Validators.required]}),
    location: new FormControl('',{validators: [Validators.required]}),
    category: new FormControl('historical',{validators: [Validators.required]}),
    description: new FormControl('',{validators: [Validators.required]}),
    imageUrl: new FormControl(this.photoGeneratedURL),
    file: new FormControl(),
  })


  onSubmit(){
    console.log(this.form);
    console.log(this.form.value);
    this.http.post(this.url,this.form.value)
  }

  // selectedFile(file:File){

  // }
}
