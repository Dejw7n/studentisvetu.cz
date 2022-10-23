import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
	selector: "home-inquireWeb-packages",
	templateUrl: "./packages.component.html",
	styleUrls: ["./packages.component.scss"],
})
export class PackagesComponent {
	@Output()
	action = new EventEmitter<{}>();

	choosePackage(packageId: number) {
		this.action.emit({
			action: "next",
			selectedPackage: packageId,
		});
	}

	packages: any = [
		{
			id: 1,
			name: "Prezenční web",
			price: 3000,
			contains: ["Doba realizace 3 dny", "Doba realizace 3 dny", "Doba realizace 3 dny", "Doba realizace 3 dny", "Doba realizace 3 dny", "Responzivní vzhled"],
			notContains: [],
		},
		{
			id: 2,
			name: "Administrační web",
			price: 5000,
			contains: ["Doba realizace 5 dnů", "Responzivní vzhled"],
			notContains: [],
		},
	];
}
