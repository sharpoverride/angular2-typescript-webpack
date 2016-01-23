import {Component} from "angular2/core";

var template = require("./dashboard.html");
import Color from "../core/Color";
import DashboardModel from "./DashboardModel";

@Component({
	selector: "dashboard",
	template
})
export default class DashboardComponent {
	model: DashboardModel = new DashboardModel();

	colors: any[];
	selectedColor: any = "";

	submitted: boolean = false;

	constructor() {
		this.initLookups();
	}

	initLookups() {
		this.colors = Object.keys(Color).map(x => {
			return {
				id: (<any>Color)[x],
				name: x
			};
		});
	}

	onSubmitClick() {
		this.submitted = true;

		if (this.selectedColor) {
			this.model.color = parseInt(this.selectedColor, 10);
		} else {
			this.model.color = null;
		}
	}
}
