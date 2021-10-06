import { Component } from '@angular/core';
import {Todo} from "./todo"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = "Project CC";
	todoValue: string = "";
	list: Todo[] = [];
	ngOnInit() {
		this.list = [];
		this.todoValue = "";
	}
	addItem() {
		if(this.todoValue !== "") {
			const newItem: Todo = {
				id: Date.now(),
				value: this.todoValue,
				isDone: false
			};
			this.list.push(newItem);
		}
		this.todoValue = "";
	}
	deleteItem(id: number) {		
		this.list = this.list.filter(i => i.id != id);
	}
	updateItem(id: number) {
		for(let i of this.list){
			if(i.id === id) {
				i.isDone = !i.isDone;
				break;
			}
		}
	}
}
