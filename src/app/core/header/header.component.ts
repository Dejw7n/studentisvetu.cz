import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	navLinks: any = [
		{
			name: "O nás",
		},
		{
			name: "Naše práce",
		},
		{
			name: "Cena",
		},
		{
			name: "Kontakt",
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
