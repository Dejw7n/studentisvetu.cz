import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
	navbarLinks: any = [
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
