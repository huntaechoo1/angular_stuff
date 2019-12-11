import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	private _http : HttpClient;

	constructor(httpclient : HttpClient) {
		this._http = httpclient;
	}
	// getPokemon(){
	// 	return this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
	// }

	// getBulbasaurAbility(){
	// 	return this._http.get('https://pokeapi.co/api/v2/ability/34/');
	// }

	getTasks(){
		return this._http.get('http://localhost:8000/tasks');
	}

	postToServer(num){
		return this._http.post('/create', num);
	}

	getOne(_id){
		return this._http.get(`/tasks/${_id}`);
	}

	create(taskData : any) : Observable<any>{
		return this._http.post('/create', taskData);
	}

	update(_id, taskData){
		return this._http.put(`/tasks/${_id}`, taskData);
	}

	delete(_id){
		return this._http.delete(`/tasks/${_id}`);
	}

}
