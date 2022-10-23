import { Component, OnInit } from "@angular/core";

@Component({
	selector: "home-inquireWeb",
	templateUrl: "./inquireWeb.component.html",
	styleUrls: ["./inquireWeb.component.scss"],
})
export class InquireWebComponent implements OnInit {
	stepNow: number = 0;

	constructor() {}

	ngOnInit(): void {}

	stepAction(data: any) {
		if (data.action == "submit") {
			this.stepNow = 1;
		}
	}
}
