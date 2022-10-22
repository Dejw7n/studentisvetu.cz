import { Component, OnInit } from "@angular/core";

@Component({
	selector: "home-inquireWeb",
	templateUrl: "./inquireWeb.component.html",
	styleUrls: ["./inquireWeb.component.scss"],
})
export class InquireWebComponent implements OnInit {
	stepNow: number = 0;
	steps: any = [
		{
			name: "Vybrat plán",
		},
		{
			name: "Detaily stránky",
		},
		{
			name: "Odeslat poptávku",
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
