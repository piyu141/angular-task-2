import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  myForm: FormGroup | any
  selectedValue: string = '';

  contacts: string[] = ["Phone", "Email"]
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),
      select: new FormControl('', Validators.required),
      Phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      Email: new FormControl('', [Validators.required, Validators.email])
    })
  }
  

  onChange(e: any) {
    this.myForm.select?.setValue(e.target.value)
    this.selectedValue = e.target.value
  }
}
