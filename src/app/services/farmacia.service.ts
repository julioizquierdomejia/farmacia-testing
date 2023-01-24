import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable, Observer } from 'rxjs';
import { Farmacia } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {

  constructor( private firestore:Firestore ) { }

  addProduct(farmacia:Farmacia){
    const farmaciaRef = collection(this.firestore, 'farmacia');
    return addDoc(farmaciaRef, farmacia)    
  }


  getFacrmacia():Observable<Farmacia[]>{
    const farmaciaRef = collection(this.firestore, 'farmacia');
    return collectionData(farmaciaRef, {idField:'id'}) as Observable<Farmacia[]>
  }


  deletedFarmacia(farmacia:Farmacia){
    const farmaciaRef = doc(this.firestore, `farmacia/${farmacia.id}`)
    return deleteDoc(farmaciaRef);
  }

}
