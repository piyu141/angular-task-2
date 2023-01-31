import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  myNewForm : FormGroup | any
  contacts: string[] = ["Phone", "Email"]
  selectedVal: string ='';

  ngOnInit(): void {
    this.myNewForm = new FormGroup({
      NameFormControl : new FormControl('', Validators.required),
      lastnameFormControl : new FormControl('', Validators.required),
      select: new FormControl('', Validators.required),
      Phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      Email: new FormControl('', [Validators.required, Validators.email])
    })
  }
 
  onChangeCon(event: any) {
   this.selectedVal = event.value;
    
  }

}
