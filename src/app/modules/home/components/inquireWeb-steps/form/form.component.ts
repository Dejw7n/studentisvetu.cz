import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "home-inquireWeb-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
	@Output()
	action = new EventEmitter<{}>();

	inquireValues = { name: "", email: "", tell: "", message: "" };
	inquireForm!: FormGroup;
	inquireValidators!: any;

	constructor() {}

	ngOnInit(): void {
		this.inquireForm = new FormGroup({
			name: new FormControl(this.inquireValues.name, [Validators.required, Validators.minLength(4)]),
			email: new FormControl(this.inquireValues.email, [Validators.required]),
			message: new FormControl(this.inquireValues.message, [Validators.required]),
		});
		this.inquireValidators = {
			name: { required: true, minLength: 4 },
			email: { required: true },
			message: { required: true },
		};
	}

	submit() {
		if (!this.inquireForm.valid) {
			this.inquireForm.markAllAsTouched();
		} else {
			this.action.emit({
				action: "submit",
				values: this.inquireValues,
			});
		}
	}
}
