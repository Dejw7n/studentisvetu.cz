import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
	selector: "app-validate-input",
	templateUrl: "./validate-input.component.html",
	styleUrls: ["./validate-input.component.scss"],
})
export class ValidateInputComponent implements OnInit {
	@Input() input: any;
	@Input() inputValidators: any;

	constructor() {}

	ngOnInit(): void {}
}
