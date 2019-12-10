import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'client';

	public data : any = {};
	public overgrowthdata : any = {};

	private _http : HttpService;
	
	constructor( httpService : HttpService){
		this._http = httpService;
	}

	ngOnInit(){
		let bulbasaurObservable : Observable<any> = this._http.getPokemon();
		let overgrowthObservable : Observable<any> = this._http.getBulbasaurAbility();
		bulbasaurObservable.subscribe(res => this.data = res);
		bulbasaurObservable.subscribe(res => console.log("bulbasaur data", res))
		overgrowthObservable.subscribe(res => this.overgrowthdata = res);
	}
}
