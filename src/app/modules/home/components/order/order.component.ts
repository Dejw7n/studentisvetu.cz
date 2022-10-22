import { Component, OnInit } from "@angular/core";

@Component({
	selector: "home-order",
	templateUrl: "./order.component.html",
	styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {
	stepActive: number = 0;
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
