import { Injectable } from '@angular/core';
import { God } from './god';

@Injectable({
  providedIn: 'root'
})
export class GodService {

  constructor() { }

  getGods(): God[]  {
    /*
      const emptyArray: God[] = [];
      
      const storageGodsList = localStorage.getItem("gods");
      const arrayGodsList = JSON.parse(storageGodsList as string);

      if (storageGodsList===null) 
      { 
        localStorage.setItem("gods", JSON.stringify(emptyArray));
        return emptyArray;
      } 
      return arrayGodsList;
    */

    return this.fetchGodsFromStorage();
  }


  getGod(id: number): God {  
    /*
      const storageGodsList = localStorage.getItem("gods") as string;
      const arrayGodsList = JSON.parse(storageGodsList);
      const god = arrayGodsList.find((g: God) => g.id === id)
      return god;
    */  

    let storageGodsList = this.fetchGodsFromStorage();
    const god = storageGodsList.find((g: God)=> g.id === id);
    return god;
  }

  updateGod(god: God): void {
    /*
      const storageGodsList = localStorage.getItem("gods") as string;
      const arrayGodsList = JSON.parse(storageGodsList);
      const godIndex = arrayGodsList.findIndex((g: God) => g.id == god.id)
      if(godIndex !=-1) {
        arrayGodsList[godIndex].name = god.name;
      }
      localStorage.setItem("gods", JSON.stringify(arrayGodsList));
    */ 

    let storageGodsList = this.fetchGodsFromStorage();
    const godIndex = storageGodsList.findIndex((g: God) => g.id == god.id)
    if(godIndex !=-1) {
      storageGodsList[godIndex].name = god.name;
    }
    localStorage.setItem("gods", JSON.stringify(storageGodsList));

  }

 addGod(god: God): void {

  /*  const storageGodsList = localStorage.getItem("gods") as string;
      var newArray: God[] = [];
      const arrayGodsList = JSON.parse(storageGodsList);
      newArray = [].concat(arrayGodsList);

      newArray.push({id: this.genId(newArray), name: god.name});
      localStorage.setItem("gods", JSON.stringify(newArray));

      var newArray: God[] = [];
      const arrayGodsList = JSON.parse(storageGodsList);
      newArray = storageGodsList.concat(arrayGodsList); 
  */

    let storageGodsList = this.fetchGodsFromStorage();
    storageGodsList.push({id: this.genId(storageGodsList), name: god.name});
    localStorage.setItem("gods", JSON.stringify(storageGodsList));
  }

  deleteGod(id: number): void {
    /* 
      const storageGodsList = localStorage.getItem("gods") as string;
      var newArray: God[] = [];
      const arrayGodsList = JSON.parse(storageGodsList);

      newArray = arrayGodsList.filter((g: God) => g.id!==id);
      localStorage.setItem("gods", JSON.stringify(newArray));
    */

    let storageGodsList = this.fetchGodsFromStorage();
    storageGodsList = storageGodsList.filter((g: God) => g.id!==id);
    localStorage.setItem("gods", JSON.stringify(storageGodsList));

  }

  filterGods(term: string) {
    if(!term.trim) {
      return [];
    }
    const storageList = this.getGods();
    const newArray = storageList.filter((g:God) => g.name.toLowerCase().includes(term.trim()));
    return newArray;
  }

  genId(gods: God[]): number {
    return gods.length > 0 ? Math.max(...gods.map(god=>god.id)) + 1 : 1;
  }

  private fetchGodsFromStorage() {
    let storageGodsList = localStorage.getItem("gods");

    if (storageGodsList===null) {
      return [];
    }
    return JSON.parse(storageGodsList as string);
  }

}


