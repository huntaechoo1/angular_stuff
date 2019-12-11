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
	// public overgrowthdata : any = {};
	public taskdata : any = {};
	private _http : HttpService;
	public newTask : any;
	public task : any = [];
	public errors : any = {};
	public isUpdating : boolean = false;
	public oneTask : any = {};
	
	constructor( httpService : HttpService){
		this._http = httpService;
	}

	ngOnInit(){
		this.title = 'Restful Tasks';
		this.newTask = { title: "", description: ""};
	}

	// displayBulbasaur(){
	// 	let bulbasaurObservable : Observable<any> = this._http.getPokemon();
	// 	bulbasaurObservable.subscribe(res => {
	// 		this.data = res
	// 		console.log("bulbasaur data", res)
	// 	});
	// }

	// displayOvergrowth(){
	// 	let overgrowthObservable : Observable<any> = this._http.getBulbasaurAbility();
	// 	overgrowthObservable.subscribe(res => this.overgrowthdata = res);
	// }

	displayTasks(){
		let taskObservable : Observable<any> = this._http.getTasks();
		taskObservable.subscribe(res => {
			this.data = res
			console.log("Task data", res)
		});
	}

	onButtonClick() : any{
		console.log("the button is clicked");
		this.displayTasks();
	}

	onButtonClickParam(num: Number): void { 
   		console.log(`Click event is working with num param: ${num}`);
	    // call the service's method to post the data, but make sure the data is bundled up in an object!copy
	    let observable = this._http.postToServer({data: num});
	    observable.subscribe(data => console.log("Got our data!", data));
	}

	onButtonClickEvent(event: any): void { 
	    console.log(`Click event is working with event: ${event}`);
	}

	onButtonClickTask(_id: String): void{
		console.log(_id);
		let oneTaskObservable : Observable<any> = this._http.getOne(_id);
		oneTaskObservable.subscribe(res => {
			console.log(res)
			this.taskdata = res
		});
	}

	onButtonClickEdit(_id){
		let observable = this._http.getOne(_id);
		observable.subscribe(res =>{
			this.oneTask = res
			this.isUpdating = true
			console.log(res)
		});
	}

	onButtonClickCancel(){
		this.isUpdating = false;
	}

	onButtonClickDelete(_id){
		let observable = this._http.delete(_id);
		observable.subscribe( () =>{
			console.log("deleted")
			this.displayTasks();
		})
	}

	onSubmit(){
		let taskObservable : Observable<any> = this._http.create(this.newTask);
		taskObservable.subscribe( res => {
			if(res.errors){
				console.log(res.errors);
				this.errors = res.errors;
			}
			else{
				this.newTask = {title: "", description: ""};
				this.displayTasks();
			}
		})
	}

	onUpdate(_id){
		let taskObservable = this._http.update(_id, this.oneTask);
		taskObservable.subscribe( res =>{
			console.log(res)
			if(res["errors"]){
				this.errors = res["errors"];
			}
			else{
				this.isUpdating = false;
				this.displayTasks();
			}
		})
		return false;
	}

}
