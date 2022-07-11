import { Injectable } from '@angular/core';
import { God } from './god';

@Injectable({
  providedIn: 'root'
})
export class GodService {

  constructor() { }

  getGods(): God[]  {


     var a = localStorage.getItem("gods") as string;
     var b = JSON.parse(a);
     return b;
  }

  getGod(id: number): God {
    var a = localStorage.getItem("gods") as string;
    var b = JSON.parse(a);
    const god = b.find((g: God) => g.id === id)
    return god;
  }

  updateGod(god: God): void {
    var a = localStorage.getItem("gods") as string;
    var b = JSON.parse(a);
    const godIndex = b.findIndex((g: God) => g.id == god.id)
    if(godIndex !=-1) {
      b[godIndex].name = god.name;
    }
    localStorage.setItem("gods", JSON.stringify(b));
  }

 addGod(god: God): void {
    var a = localStorage.getItem("gods") as string;
    var newArray: God[] = [];
    var b = JSON.parse(a);
    newArray = [].concat(b);

    newArray.push({id: this.genId(newArray), name: god.name});
    localStorage.setItem("gods", JSON.stringify(newArray));
  }

  deleteGod(id: number): void {
    var a = localStorage.getItem("gods") as string;
    var newArray: God[] = [];
    var b = JSON.parse(a);

    newArray = b.filter((g: God) => g.id!==id);
    localStorage.setItem("gods", JSON.stringify(newArray));
  }


  genId(gods: God[]): number {
    return gods.length > 0 ? Math.max(...gods.map(god=>god.id)) + 1 : 11;
  }

}


