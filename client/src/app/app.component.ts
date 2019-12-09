import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'client';
	title2 = 'client2';
	constructor(private _httpService : HttpService){
		this._httpService = _httpService;
	}
}
