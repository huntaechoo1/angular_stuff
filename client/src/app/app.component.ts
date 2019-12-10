import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Restful Tasks';

	public data : any = {};
	public overgrowthdata : any = {};

	private _http : HttpService;
	
	constructor( httpService : HttpService){
		this._http = httpService;
	}

	ngOnInit(){
		// this.displayBulbasaur();
		// this.displayOvergrowth();
		this.displayTasks();
	}

	displayBulbasaur(){
		let bulbasaurObservable : Observable<any> = this._http.getPokemon();
		bulbasaurObservable.subscribe(res => {
			this.data = res
			console.log("bulbasaur data", res)
		});
	}

	displayOvergrowth(){
		let overgrowthObservable : Observable<any> = this._http.getBulbasaurAbility();
		overgrowthObservable.subscribe(res => this.overgrowthdata = res);
	}

	displayTasks(){
		let taskObservable : Observable<any> = this._http.getTasks();
		taskObservable.subscribe(res => {
			this.data = res
			console.log("Task data", res)
		});
	}
}
