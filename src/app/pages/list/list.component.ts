import { Component, OnInit } from '@angular/core';
import { Farmacia } from 'src/app/interfaces/interface';
import { FarmaciaService } from 'src/app/services/farmacia.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit{

  farmacia!:Farmacia[];


  constructor( private farmaServices:FarmaciaService){



  }

  ngOnInit(): void {
    
    this.farmaServices.getFacrmacia().subscribe(Farmacia => {
      this.farmacia = Farmacia
    }) 

  }


  onClickDelete(farmacia : Farmacia){
    const response = this.farmaServices.deletedFarmacia(farmacia)
    console.log(response)
  }

}
