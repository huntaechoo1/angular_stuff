import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	constructor(private _http: HttpClient) {
  		this.getTasks();
  		this.getOneTask();
  		this.getPokemon();
	}

	getTasks(){
		let tempObservable = this._http.get('/tasks');
		tempObservable.subscribe(data => console.log("Got our tasks", data));
	}

	getOneTask(){
		let tempObservable = this._http.get('/tasks/5deaa36329d9bc41a41d9d21');
		tempObservable.subscribe(data => console.log("Got our task", data));
	}

	getPokemon(){
		let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
		bulbasaur.subscribe(data => console.log("Bulbasaur Data", data));
		bulbasaur.subscribe(data => console.log(`Bulbasaur's skills are ${data["abilities"][0]["ability"]["name"]} 
			and ${data["abilities"][1]["ability"]["name"]}`));
	}

}
