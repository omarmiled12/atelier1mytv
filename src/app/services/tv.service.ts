import { Injectable } from '@angular/core';
import { Tv } from '../model/tv.model';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  tvs: Tv[];
  tv!: Tv;

  constructor() {
    this.tvs = [
      {
        idTv: 1,
        nomTv :'LG C3 OLED TV',
        prixTv: 2600,
        dateCreation: new Date('01/04/2023'),
      },
      {
        idTv: 2,
        nomTv: 'Samsung QN90C Neo QLED TV',
        prixTv: 3000 ,
        dateCreation: new Date('12/03/2023'),
      },
      {
        idTv: 3,
        nomTv: 'Sony A95L QD-OLED TV',
        prixTv: 3300,
        dateCreation: new Date('02/08/2023'),
      },
    ];
  }

  listeTvs(): Tv[] {
    return this.tvs;
  }

  addTv(tv: Tv) {
    this.tvs.push(tv);
  }


  supprimerTv(t: Tv) {
    const index = this.tvs.indexOf(t, 0);
    if (index > -1) {
      this.tvs.splice(index, 1);
    }
  }

  consulterTv(id: number): Tv {
    this.tv = this.tvs.find((p) => p.idTv == id)!;
    return this.tv;
  }


  updateTv(tvv: Tv) {

    this.supprimerTv(tvv);

    this.addTv(tvv);
  }
}
