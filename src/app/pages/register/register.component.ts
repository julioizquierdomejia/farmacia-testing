import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FarmaciaService } from 'src/app/services/farmacia.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

formRegister!:FormGroup;

constructor( private farmaciaService:FarmaciaService ){
  
  this.formRegister = new FormGroup({
    producto: new FormControl(),
    costo: new FormControl(),
    foto: new FormControl()
  })

}

ngOnInit(): void {
  
}

async onSubmit(){
  console.log(this.formRegister.value);
  const response = this.farmaciaService.addProduct(this.formRegister.value)
  console.log(response)
}


}
